import React, {Component} from 'react';
import './App.css';
import characters from './characters.json';
import ImgCard from './components/ImgCard';
import {Container, Row, Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class App extends Component {
		constructor(props) {
				super(props);
				this.state = {
						characters,
						score: 0,
						highScore: 0
				};
		}
		shuffleCards = () => {
				const characters = this
						.state
						.characters
						.sort(() => 0.5 - Math.random());
				this.setState({characters});

		}
		//Reactor this monster
		pickCard = id => {
				let score = this.state.score;
				let highScore = this.state.highScore;
				const characters = this
						.state
						.characters
						.map(character => {
								if (id === character.id) {
										if (character.clicked) {
												score = 0;
												// renderAlert();
												this.setState({
														characters: this.resetClicked()
												});
										} else if (!character.clicked) {
												character.clicked = true;
												score = score + 1;
												if(highScore <= score) highScore = highScore + 1;
										}

								}
								this.setState({characters, score, highScore});
						});
				this.shuffleCards();

		}

		resetClicked() {
				const characters = this
						.state
						.characters
						.map(character => character.clicked = false);
				this.setState({characters});
		}

		//Randomize at Mount
		componentDidMount() {
			this.shuffleCards();
		}

		render() {
				return (
						<div>
								<Navbar fixed="top" className="text-white">
										<NavbarBrand href="/">
												React Memory Game
										</NavbarBrand>
										<div>
												<span>Score: {this.state.score}</span>
												|
												<span>High Score: {this.state.highScore}</span>
										</div>
								</Navbar>
								<Jumbotron>
										<Container>
												<h1>Memory Game</h1>
												<p>Click on an image to earn points, but don't click on any more than once!</p>
										</Container>
								</Jumbotron>
								<Container >
										<Row>
												{this
														.state
														.characters
														.map(character => <ImgCard
																pickCard={this.pickCard}
																key={character.id}
																id={character.id}
																name={character.name}
																image={require(`${character.image}`)}/>)}
										</Row>
								</Container>
						</div>
				);
		}
}

export default App;
