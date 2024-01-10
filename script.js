const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', () => handleButtonClick('rock'));
const buttonPaper = document.querySelector('#paper');
buttonPaper.addEventListener('click', () => handleButtonClick('paper'));
const buttonScissor = document.querySelector('#scissor');
buttonScissor.addEventListener('click', () => handleButtonClick('scissor'));


let playerPoints = 0;
let computerPoints = 0;

function handleButtonClick (playerChoice) {
    let computerChoice = getComputerChoice();
    let result = simulateRound(playerChoice, computerChoice);
    updateGame(result);
}

function simulateRound (player, computer) { 
    if (computer === player) {
        result = 'tie';
    } else if (
        (computer === 'rock' && player === 'scissor') ||
        (computer === 'paper' && player === 'rock') ||
        (computer === 'scissor' && player === 'paper')
    ) {
        result = 'lose';
    } else {
        result = 'win';
    }
    console.log(result);
    return result;
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
        return 'rock'
    } else if (randomChoice === 2) {
        return 'paper' 
    } else {
        return 'scissor'
    }
}

function updateGame (result) {
    if (result === 'win') {
        playerPoints++;
        console.log(`player points: ${playerPoints}`, `computer points: ${computerPoints}`);
    } else if (result === 'lose') {
        computerPoints++;
        console.log(`player points: ${playerPoints}`, `computer points: ${computerPoints}`);
    } else console.log(`player points: ${playerPoints}`, `computer points: ${computerPoints}`);

    if (playerPoints === 5) {
        alert('WIN');
    } else if (computerPoints === 5) {
        alert('lose');
    }
}


