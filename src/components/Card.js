import React, { useState, useEffect } from 'react';
import './Card.css';

function Card(props) {
	const [wasClicked, setWasClicked] = useState(false);
	function handleClick() {
		// setWasClicked(!wasClicked);

		if (wasClicked) {
			// End Game
			props.gameOver();
			props.randomizeCards();
			console.log('Game Over');
		} else {
			setWasClicked(() => true);
			props.incrementScore();
			props.randomizeCards();
		}
	}
	useEffect(() => {
		if (props.reset) {
			setWasClicked(false);
		}
	}, [props.reset]);

	return (
		<div className="Card" onClick={handleClick}>
			<img src={props.image} alt={props.name}></img>
			<h2>{props.name}</h2>
		</div>
	);
}

export default Card;
