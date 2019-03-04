import React, { Component } from 'react';

import { animateCSS } from './../../../utils/actionsGlobal';

import MyText from './MyText';

import Kany from './../../../assets/mp3/Kany.mp3';
import ShowMan from './../../../assets/mp3/Showman.mp3';
import Momentos from './../../../assets/mp3/Momentos.mp3';

import './Sebs.scss';

var player;

class Sebs extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
			songs: [
				[],
				[Kany],
				[ShowMan],
				[Momentos]
			],
			dialog: true,
			currentSong : 1,
			player : null
		}
  }

  // Fetch the list on first mount
  componentDidMount() {
		var that = this;
		window.onload = () => {
			document.getElementById('mymarquee').stop();
			var noSee = localStorage.getItem("noSee");
			if(noSee) {
				that.setState({ dialog: false});
			} else {
				animateCSS('.dialog', 'bounceIn', function() {
					// Do something after animation
				});
	
				player = document.getElementById('audio_player');			
				this.setState(player);
			}
						
		}
	}
	
	_statusPlayer (e) {
		

		player = document.getElementById('audio_player');
		player.setAttribute("src", this.state.songs[this.state.currentSong]);
		player.play();
	}	
	_startSong(e) {
		let { currentSong } = this.state;
		currentSong = currentSong + 1;
		if(currentSong > 4) {
			this._endGame();
		} else {
			this.setState({currentSong})
		}
		
	}
	_endGame() {
		document.getElementById('mymarquee').stop();
		localStorage.setItem("noSee", true);
	}
	_sebsStart() {
		var that = this;
		animateCSS('.buttonStart', 'tada', function() {
			animateCSS('.dialog', 'tada', function() {
				player = document.getElementById('audio_player');
				player.play();
				that.setState({ dialog: false})

				document.getElementById('mymarquee').start();
			});
		});
	}
  render() {
		const { dialog } = this.state;
    return (
      <div className="Sebs">
				<div className={`container-dialog ${dialog ? 'in': 'out'}` }>
					<div className="dialog">						
						<h2>Antes de empezar….</h2>
						<section>
							Sépase que esto sólo lo podrá leer una vez, luego será imposible volver a hacerlo.
						</section>
						<article>A tú gusto,</article>
						<footer>
							Mike.
						</footer>
						<button className="buttonStart" onClick={() => this._sebsStart()}>Empezar</button>
					</div>
				</div>

				<audio
				id="audio_player"
				className="audio_player"
				width="300"
				height="32"
				src={Kany}
				controls="controls"
				data-current=""
				preload="auto"
				autobuffer=""
				onPlay={(e) => this._startSong(e)}
				onEnded={(e) => this._statusPlayer(e)}
			></audio>

			<marquee  scrollamount="1" behavior="scroll" direction="up" id="mymarquee">
				<MyText />
			</marquee>
			</div>
    );
  }
}

export default Sebs;