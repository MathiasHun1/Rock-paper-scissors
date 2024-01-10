const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', simulateRound);
const buttonPaper = document.querySelector('#paper');
buttonPaper.addEventListener('click', simulateRound);
const buttonScissor = document.querySelector('#scissor');
buttonScissor.addEventListener('click', simulateRound);


function simulateRound (event) { 

    const computer = getComputerChoice();
    const player = event.target.id;
    console.log(`computer: ${computer}`, `player: ${player}`);

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

    console.log('result: ', result);
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


