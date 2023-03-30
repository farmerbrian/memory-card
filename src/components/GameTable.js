import React, { useState } from 'react';
import './GameTable.css';
import Card from './Card.js';
import Blendin from '../assets/blendin.png';
import Dipper from '../assets/dipper.png';
import Ford from '../assets/ford.png';
import Gideon from '../assets/gideon.png';
import Grenda from '../assets/grenda.png';
import Mabel from '../assets/mabel.png';
import Mcgucket from '../assets/mcgucket.png';
import Stan from '../assets/stan.png';
import Waddles from '../assets/waddles.png';
import Wendy from '../assets/wendy.png';

function GameTable(props) {
	const cards = [
		{ key: 'blendin', name: 'Blendin', image: Blendin },
		{ key: 'dipper', name: 'Dipper', image: Dipper },
		{ key: 'ford', name: 'Ford', image: Ford },
		{ key: 'gideon', name: 'Gideon', image: Gideon },
		{ key: 'grenda', name: 'Grenda', image: Grenda },
		{ key: 'mabel', name: 'Mabel', image: Mabel },
		{ key: 'mcgucket', name: 'McGucket', image: Mcgucket },
		{ key: 'stan', name: 'Stan', image: Stan },
		{ key: 'waddles', name: 'Waddles', image: Waddles },
		{ key: 'wendy', name: 'Wendy', image: Wendy },
	];

	const [positions, setPositions] = useState(
		cards.map((value, index) => index)
	);

	function shuffleCards(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	// const shuffleCards = (array) => {
	// 	let shuffledArray = array.slice(0);
	// 	for (let i = 0; i < shuffledArray.length; i++) {
	// 		const j = Math.floor(Math.random() * shuffledArray.length);
	// 		[shuffledArray[i], shuffledArray[j]] = [
	// 			shuffledArray[j],
	// 			shuffledArray[i],
	// 		];
	// 	}
	// 	return shuffledArray;
	// };

	const randomizeCards = () => {
		setPositions(shuffleCards(positions));
	};

	// console.log(cards);
	// shuffleCards(cards);

	return (
		<div className="Card-Container">
			{positions.map((position) => {
				return (
					<Card
						key={cards[position].key}
						image={cards[position].image}
						name={cards[position].name}
						highScore={props.setHighScore}
						incrementScore={props.incrementScore}
						reset={props.setReset}
						gameOver={props.gameOver}
						randomizeCards={randomizeCards}
					/>
				);
			})}
		</div>
	);
}

export default GameTable;
