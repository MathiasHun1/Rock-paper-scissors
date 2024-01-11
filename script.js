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
const resetButton = document.querySelector('#reset > button');
const playerImage = document.querySelector('#player-image');
const computerImage = document.querySelector('#computer-image');


resetButton.addEventListener('click', () => {
    playerPoints = 0;
    computerPoints = 0;
    playerScoreText.innerText = `Játékos: ${playerPoints}`;
    computerScoreText.innerText = `Computer: ${computerPoints}`;
    gameResultText.innerText = '';
    resetButton.style.display = 'none';
    playerImage.setAttribute('src', 'images/empty.png');
    computerImage.setAttribute('src', 'images/empty.png');
})

playerScoreText.innerText = 'Játékos: 0';
computerScoreText.innerText = 'Computer: 0';

resetButton.style.display = 'none';
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

    if (player === 'rock') {        
        playerImage.setAttribute('src', 'images/rock2.jpeg');
    } else if (player === 'paper') {
        playerImage.setAttribute('src', 'images/paper2.jpeg');
    } else {
        playerImage.setAttribute('src', 'images/scissor.jpeg');
    }

    if (computer === 'rock') {        
        computerImage.setAttribute('src', 'images/rock2.jpeg');
    } else if (computer === 'paper') {
        computerImage.setAttribute('src', 'images/paper2.jpeg');
    } else {
        computerImage.setAttribute('src', 'images/scissor.jpeg');
    }

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
        playerScoreText.innerText = `Játékos: ${playerPoints}`;
    } else if (result === 'lose') {
        computerPoints++;
        computerScoreText.innerText = `Computer: ${computerPoints}`;
        console.log(`player points: ${playerPoints}`, `computer points: ${computerPoints}`);
    }

    if (playerPoints === 5) {
        recentScoreText.innerText = '';
        gameResultText.innerText = 'BAJNOK!';
        resetButton.style.display = 'inline';

    } else if (computerPoints === 5) {
        recentScoreText.innerText = '';
        gameResultText.innerText = 'Elvesztetted a játékot';
        resetButton.style.display = 'inline';
    }
}

