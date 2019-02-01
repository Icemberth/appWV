import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import http from 'http';

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
	{
	  title: 'Harry Potter and the Chamber of Secrets',
	  author: 'J.K. Rowling',
	},
	{
	  title: 'Jurassic Park',
	  author: 'Michael Crichton',
	},
  ];
  
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

dotenv.config();

const configurations = {
  // Note: You may need sudo to run on port 443
  production: { ssl: true, port: 443, hostname: 'example.com' },
  development: { ssl: false, port: 4000, hostname: 'localhost' }
}

const environment = process.env.NODE_ENV || 'production';
const config = configurations[environment];

const apollo = new ApolloServer({ typeDefs, resolvers });

const app = express();
apollo.applyMiddleware({ app });

// Create the HTTPS or HTTP server, per configuration
var server
if (config.ssl) {
  // Assumes certificates are in .ssl folder from package root. Make sure the files
  // are secured.
  server = https.createServer(
    {
      key: fs.readFileSync(`./ssl/${environment}/server.key`),
      cert: fs.readFileSync(`./ssl/${environment}/server.crt`)
    },
    app
  )
} else {
  server = http.createServer(app)
}

// Add subscription support
apollo.installSubscriptionHandlers(server)

server.listen({ port: config.port }, () =>
  console.log(
    '🚀 Server ready at',
    `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${apollo.graphqlPath}`
  )
)