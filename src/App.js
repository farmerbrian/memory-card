import React, { useState } from 'react';
import GameTable from './components/GameTable.js';
import './App.css';

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [reset, setReset] = useState(true);

	function incrementScore() {
		setReset(() => false);

		if (score === 9) {
			alert('You Win!!!');
			setReset(() => true);
			setHighScore(() => score + 1);
			setScore(() => 0);
		} else {
			setScore(() => score + 1);
		}
	}

	function gameOver() {
		if (score > highScore) {
			setHighScore(() => score);
		}
		setReset(() => true);
		setScore(() => 0);
		alert('You Lose!!');
	}
	return (
		<div className="App">
			<div className="Header">
				<div>
					<h1>Gravity Falls Memory Game</h1>
					<h3>
						Try and click all of the cards without clicking the same
						one twice!
					</h3>
				</div>
				<div>
					<h2>
						Your Score: {score} - High Score: {highScore}
					</h2>
					<h2></h2>
				</div>
			</div>
			<div>
				<GameTable
					reset={reset}
					highScore={setHighScore}
					incrementScore={incrementScore}
					gameOver={gameOver}
				/>
			</div>
		</div>
	);
}

export default App;
