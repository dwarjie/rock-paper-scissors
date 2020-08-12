const cards = document.querySelector('.left-choices');
let cardImagesPath = ['img/card-rock.png', 'img/card-paper.png', 'img/card-scissors.png'];


cards.addEventListener('click', checkPick);

// main game function 
function game() {
	let i = 0;
	while (i < 5) {
		let playerChoice = prompt('Your short: ', 'rock'); // ask for input
		console.log(checkWinner(playerChoice, computerPlay()));
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
	showPickedCards(playerChoice, 'left-side');
	console.log(checkWinner(playerChoice, computerPlay()));
}

// check who is the winner
function checkWinner(playerSelection, computerSelection) {
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

// randomly pick from the game choices for computer AI
function computerPlay() {
	const GAME_CHOICE = [1, 2, 3];
	let computerCard = GAME_CHOICE[Math.floor(Math.random() * GAME_CHOICE.length)];
	showPickedCards(computerCard, 'right-side');
	return computerCard;
}

// check the card for the specified card image
function cardImage(chosenCard) {
	let cardPath;
	switch (chosenCard) {
		case 1:
			cardPath = cardImagesPath[1]; // paper
			break;
		case 2:
			cardPath = cardImagesPath[2]; // scissor
			break;
		case 3:
			cardPath = cardImagesPath[0]; // rock
			break;
	}
	return cardPath;
}

function showPickedCards(chosenCard, cardSide) {
	let cardPath = cardImage(chosenCard);
	const parentElem = document.querySelector(`.${cardSide}`);
	// create a img new element
	const pickedCard = document.createElement('img');
	pickedCard.setAttribute('src', cardPath);
	pickedCard.classList.add('chosen');
	parentElem.appendChild(pickedCard);
}
