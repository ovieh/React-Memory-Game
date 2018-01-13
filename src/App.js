import React, {Component} from 'react';
import './App.css';
import characters from './characters.json';
// import Wrapper from './components/Wrapper';
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
		pickCard = id => {
				let score = this.state.score;
				const characters = this
						.state
						.characters
						.map(character => {
								if (id === character.id) {
										if (character.clicked) {
												score = 0;
												this.setState({
														characters: this.resetClicked()
												});
										} else if (!character.clicked) {
												character.clicked = true;
												score = score + 1;
										}
								}
								this.setState({characters, score: score});
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

		increaseScore() {}

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
												{/* <img src={ require(`${this.state.characters[0].image}`) } alt={this.state.characters[0].name} /> */}
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
