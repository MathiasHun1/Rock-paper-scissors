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

function simulateRound (computer, player) {
    
    computer = getComputerChoice();
    player = getPlayerChoice().toLocaleLowerCase();
    let result;

    if (computer === player) {
        result = 'tie';
    } else if (
        (computer === 'rock' && player === 'scissors') ||
        (computer === 'paper' && player === 'rock') ||
        (computer === 'scissors' && player === 'paper')
    ) {
        result = 'lose';
    } else {
        result = 'win';
    }

    if (result === 'lose') {
        alert(`You lose, ${computer} beats ${player}!`);
    } else if (result === 'win') {
        alert(`You win, ${player} beats ${computer}!`);
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
        result = simulateRound(computerSelection, playerSelection);

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




