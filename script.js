const possibleAnswers = ['paper', 'scissors', 'rock'];
let playerScore = 0;
let computerScore = 0;
let display = document.querySelector('.display');
let buttons = document.querySelector('.container');
let computerScoreDisplay = document.getElementById('computer-score');
let playerScoreDisplay = document.getElementById('player-score');
let modal = document.querySelector('.modal');
let newGameButton = document.querySelector('.new-game-button');
let modalResult = document.querySelector('.modal-result');

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    computerScoreDisplay.textContent = 0;
    playerScoreDisplay.textContent = 0;
    display.textContent = 'Selecciona una opción'
    modal.style.display = 'none'
}

function getComputerChoice() { 
    return possibleAnswers[Math.floor(Math.random()*3)];
}

function roundResult (playerSelection, computerSelection) {
    const diff = possibleAnswers.indexOf(playerSelection) - possibleAnswers.indexOf(computerSelection)

    if (diff === 0) {
        display.textContent = "It's a tie!"
    } else if (diff === 1 || diff === -2) {
        playerScoreDisplay.textContent = ++playerScore;
        display.textContent =  `You win! ${playerSelection} beats ${computerSelection}` 

    } else {
        computerScoreDisplay.textContent = ++computerScore;
        display.textContent =  `You lose! ${computerSelection} beats ${playerSelection}` 
    }
}

function playRound(e) {
    const playerSelection = e.target.id;
    if (possibleAnswers.includes(playerSelection)) {
        const computerSelection = getComputerChoice();
        const gameResult = roundResult(playerSelection, computerSelection)
    }
    if (computerScore == 5 || playerScore == 5) {
        modal.style.display = 'flex';
        modalResult.textContent = computerScore === 5 ? 'Computer Wins...' : 'You win!';
    }
}

buttons.addEventListener("click", playRound)

newGameButton.addEventListener("click", restartGame)

