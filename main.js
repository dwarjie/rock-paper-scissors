const GAME_CHOICE = [1, 2, 3];
let playerChoice = 'rock';
let computer = computerPlay();
// 1 - Rock
// 2 - Paper
// 3 - Scissors

// randomly pick from the game choices for computer AI
function computerPlay() {
	return GAME_CHOICE[Math.floor(Math.random() * GAME_CHOICE.length)];
}

function selectWinner(playerSelection, computerSelection) {
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

// call the game
console.log(computer);
console.log(selectWinner(playerChoice, computer));