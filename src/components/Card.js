import React, { useState } from 'react';
import './Card.css';

function Card(props) {
	const [wasClicked, setWasClicked] = useState(false);
	function handleClick() {
		if (wasClicked) {
			// End Game
			props.gameOver();
			props.randomizeCards();
			console.log('Game Over');
		} else {
			// props.setReset(() => false);
			setWasClicked(() => true);
			props.incrementScore();
			props.randomizeCards();
		}
	}

	return (
		<div className="Card" onClick={handleClick}>
			<img src={props.image} alt={props.name}></img>
			<h2>{props.name}</h2>
		</div>
	);
}

export default Card;
