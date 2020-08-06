// 1 - Rock
// 2 - Paper
// 3 - Scissors

// main game function 
function game() {
	let i = 0;
	while (i < 5) {
		let playerChoice = prompt('Your short: ', 'rock'); // ask for input
		console.log(start(playerChoice, computerPlay()));
		i++;
	}
}

// randomly pick from the game choices for computer AI
function computerPlay() {
	const GAME_CHOICE = [1, 2, 3];
	return GAME_CHOICE[Math.floor(Math.random() * GAME_CHOICE.length)];
}

function start(playerSelection, computerSelection) {
	let player;
	switch (playerSelection.toLowerCase()) {
		case 'rock':
			player = 1;
			break;
		case 'paper':
			player = 2;
			break;
		case 'scissor':
			player = 3;
			break;
	}

	if (player == computerSelection) {
		return 'DRAW';
	} else if (player == 1 && computerSelection == 2) {
		return 'You LOSE!';
	} else if (player == 2 && computerSelection == 3) {
		return 'You SUCK!';
	} else if (player == 3 && computerSelection == 1) {
		return 'You FUCK!';
	} else {
		return 'YOU ROCK!'; // you win
	}
}