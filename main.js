// 1 - 3
// 2 - 1
// 3 - 2
const cards = document.querySelector('.left-choices');

cards.addEventListener('click', checkPick);

// main game function 
function game() {
	let i = 0;
	while (i < 5) {
		let playerChoice = prompt('Your short: ', 'rock'); // ask for input
		console.log(start(playerChoice, computerPlay()));
		i++;
	}
}

// click events for the cards
function checkPick(e) {
	const item = e.target;
	let playerChoice;
	if (item.classList[2] == 'card-rock') {
		playerChoice = 3;
	} else if (item.classList[2] == 'card-paper') {
		playerChoice = 1;
	} else { 
		// scissors
		playerChoice = 2;
	}
	console.log(start(playerChoice, computerPlay()));
}

// randomly pick from the game choices for computer AI
function computerPlay() {
	const GAME_CHOICE = [1, 2, 3];
	return GAME_CHOICE[Math.floor(Math.random() * GAME_CHOICE.length)];
}

function start(playerSelection, computerSelection) {
	let player;
	// switch (playerSelection.toLowerCase()) {
	// 	case 'rock':
	// 		player = 1;
	// 		break;
	// 	case 'paper':
	// 		player = 2;
	// 		break;
	// 	case 'scissor':
	// 		player = 3;
	// 		break;
	// }
	console.log(computerSelection);
	if (playerSelection == computerSelection) {
		return 'DRAW';
	} else if (playerSelection == 1 && computerSelection == 2) {
		return 'You LOSE!';
	} else if (playerSelection == 2 && computerSelection == 3) {
		return 'You SUCK!';
	} else if (playerSelection == 3 && computerSelection == 1) {
		return 'You FUCK!';
	} else {
		return 'YOU ROCK!'; // you win
	}
}