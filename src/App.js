import React, { useState } from 'react';
import GameTable from './components/GameTable.js';
import './App.css';

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [reset, setReset] = useState(false);

	function incrementScore() {
		setReset(() => false);
		setScore(() => score + 1);
	}

	function gameOver() {
		setReset(() => true);
		setHighScore(() => score);
		setScore(() => 0);
	}
	return (
		<div className="App">
			<div>
				<h2>Score: {score}</h2>
				<h2>High Score: {highScore}</h2>
			</div>
			<div>
				<GameTable
					reset={setReset}
					highScore={setHighScore}
					incrementScore={incrementScore}
					gameOver={gameOver}
				/>
			</div>
		</div>
	);
}

export default App;
