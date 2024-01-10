const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', () => handleButtonClick('rock'));
const buttonPaper = document.querySelector('#paper');
buttonPaper.addEventListener('click', () => handleButtonClick('paper'));
const buttonScissor = document.querySelector('#scissor');
buttonScissor.addEventListener('click', () => handleButtonClick('scissor'));
const playerScoreText = document.querySelector('#player-score');
const computerScoreText = document.querySelector('#computer-score');
const recentScoreText = document.querySelector('#recent-score > p');
const gameResultText = document.querySelector('#result-container > h1');

playerScoreText.innerText = 0;
computerScoreText.innerText = 0;
let playerPoints = 0;
let computerPoints = 0;

function handleButtonClick (playerChoice) {
    if (playerPoints >= 5 || computerPoints >= 5) {
        return;
    }

    let computerChoice = getComputerChoice();
    let result = simulateRound(playerChoice, computerChoice);
    updateGame(result);
}

function simulateRound (player, computer) { 
    if (computer === player) {
        result = 'tie';
        recentScoreText.innerText = `Döntetlen!`
        recentScoreText.style.color = 'white';
    } else if (
        (computer === 'rock' && player === 'scissor') ||
        (computer === 'paper' && player === 'rock') ||
        (computer === 'scissor' && player === 'paper')
    ) {
        result = 'lose';
        recentScoreText.innerText = `Ezt a kört bizony elbuktad!`
        recentScoreText.style.color = 'red';
    } else {
        result = 'win';
        recentScoreText.innerText = `Győzött a hatodik érzéked, megnyerted a kört!`
        recentScoreText.style.color = 'green';
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
        playerScoreText.innerText = playerPoints;
        // console.log(`player points: ${playerPoints}`, `computer points: ${computerPoints}`);
    } else if (result === 'lose') {
        computerPoints++;
        computerScoreText.innerText = computerPoints;
        console.log(`player points: ${playerPoints}`, `computer points: ${computerPoints}`);
    }

    if (playerPoints === 5) {
        recentScoreText.innerText = '';
        gameResultText.innerText = 'BAJNOK!'

    } else if (computerPoints === 5) {
        recentScoreText.innerText = '';
        gameResultText.innerText = 'Elvesztetted a játékot'
    }
}


