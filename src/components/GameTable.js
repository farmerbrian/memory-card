// import React, { useState } from 'react';
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

function GameTable() {
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
	return (
		<div>
			{cards.map((card) => {
				// return <li> {card.name}</li>;
				return (
					<Card key={card.key} image={card.image} name={card.name} />
				);
			})}
			;
		</div>
	);
}

export default GameTable;
