// Implement a "getComputerChoice" function, that randomly returns rock/paper/scissor
// Get a user input of rock/paper or scissor and store it in a variable. Make it case insensitive, reprompt if input is not valid
// Compare the two variables, and announce the result
// Store this algorithm in a "simulate round" function
// Create a "game" function, that simulates 5 rounds, track the results, and announce the winner!


let computerSelection;
let playerSelection;
simulateGame();

function getPlayerChoice() {
    let choice;
    do {
        choice = prompt('Time to Choose! Rock, paper or scissors?').toLowerCase();
    } while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors');
    return choice;
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
        return 'rock'
    } else if (randomChoice === 2) {
        return 'paper' 
    } else {
        return 'scissors'
    }
}

function simulateRound () {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice().toLocaleLowerCase();
    let result;

    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        result = 'lose';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        result = 'lose';
     } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        result = 'lose';
     } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        result = 'win';
     } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        result = 'win';
     } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        result = 'win';
     } else if (computerSelection === playerSelection) { 
        result = 'tie';
     } else if (computerSelection === playerSelection) {
        result = 'tie';
     } else if (computerSelection === playerSelection) {
        result = 'tie';
     }

    if (result === 'lose') {
        alert(`You lose, ${computerSelection} beats ${playerSelection}!`);
    } else if (result === 'win') {
        alert(`You win, ${playerSelection} beats ${computerSelection}!`);
    } else {
        alert('TIE!');
    }

    return result;
}

function simulateGame() {
    let result;
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        result = simulateRound();

        if (result === 'win') {
            playerPoints++;
        }
        if (result === 'lose') {
            computerPoints++;
        } 

        alert(`Player: ${playerPoints} Computer: ${computerPoints}`);
    }

    if (playerPoints > computerPoints) {
        alert('You win the game!');
    } else if (playerPoints < computerPoints) {
        alert('You lose the game!');
    } else {
        alert('The game is a TIE!');
    }
}




