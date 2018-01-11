import React, { Component} from 'react';
import './App.css';
import characters from './characters.json';
// import Wrapper from './components/Wrapper';
import ImgCard from './components/ImgCard';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { characters, score: 0, highScore: 0 };
	}
	render() {
		return (
			<div>
				<Navbar inverse fixedTop>
					<Grid>
						<Navbar.Header>
							<Navbar.Brand>
								<a href="#brand">React Memory Game</a>
							</Navbar.Brand>
						</Navbar.Header>
						<Navbar.Text pullRight>
							<span>Score: {this.state.score}</span> | <span>High Score: {this.state.highScore}</span>
						</Navbar.Text>
					</Grid>
				</Navbar>
				<Jumbotron>
					<Grid>
						<h1>Memory Game</h1>
						<p>Click on an image to earn points, but don't click on any more than once!</p>
					</Grid>
				</Jumbotron>
				<Grid>
					{/* <img src={ require(`${this.state.characters[0].image}`) } alt={this.state.characters[0].name} /> */}
					{ this.state.characters.map(character => <ImgCard 
						key={character.id}
						id={character.id}
						name={character.name}
						image={ require(`${character.image}`) }
					/>) }
				</Grid>
			</div>
		);
	}
}

export default App;
