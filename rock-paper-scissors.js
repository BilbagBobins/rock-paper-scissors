function computerPlay() {
    const hand = ["Rock", "Paper", "Scissors"]
    const play = hand[Math.floor(Math.random() * hand.length)];
    return play;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "Rock") {
            results(`It's a Draw!?`);
            return "draw";
        } else if (computerSelection === "Paper") {
            results("You Lose! Paper beats Rock");
            return "lose";
        } else {
            results("You Win! Rock beats Scissors");
            return "win";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            results("You Win! Paper beats Rock");
            return "win";
        } else if (computerSelection === "Paper") {
            results("It's a Draw!?");
            return "draw";
        } else {
            results("You Lose! Scissors beats Paper");
            return "lose";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "Rock") {
            results("You Lose! Rock beats Scissors");
            return "lose";
        } else if (computerSelection === "Paper") {
            results("You Win! Scissors beats Paper");
            return "win";
        } else {
            results("It's a Draw!?");
            return "draw";
        } 
    } else {
        results("Need a choice to play");
    }
}

function results(message){
    roundWinner.textContent = '';
    setTimeout(function() {
        roundWinner.textContent = message;
        roundWinnerDiv.appendChild(roundWinner);
    }, 500);
}

function endgame(winner) {
    const winnerDiv = document.createElement('div')
    winnerDiv.classList.add('winner');
    gameContain.appendChild(winnerDiv);
    setTimeout(function () {
        const endText = document.createElement('div');
        endText.textContent = winner;
        winnerDiv.appendChild(endText);  
    }, 1200);
    setTimeout(function() {
        winnerDiv.appendChild(newGameButton); 
        newGameButton.textContent = 'New Game';
    }, 2300);
}

function runningTotal(player,computer) {
    totals.textContent = (`Player: ${player} | Computer: ${computer}`);
    // if (scoreContainer.children.length > 0) {
    scoreContainer.replaceChild(totals, totals);
}

function game(playerSelection) {
    if (gameCounter < 1) {
        roundWinnerDiv = document.createElement('div');
        roundWinnerDiv.setAttribute('class', 'round-winner');
        roundContainer = document.createElement('div');
        roundContainer.setAttribute('class', 'round-container');
        gameContain.appendChild(roundContainer);
        setTimeout(function() {gameContain.appendChild(roundWinnerDiv)}, 500);
    }
    const computerSelection = computerPlay();
    roundText.textContent = (`Computer plays ${computerSelection}`);
    roundContainer.appendChild(roundText);
    const game = playRound(playerSelection, computerSelection);
    if (game === 'win') {
        playerScore += 1;
    } else if (game === 'lose') {
        computerScore += 1;
    }
    runningTotal(playerScore, computerScore);
    if (computerScore === 5) {
        endgame("Computer Wins!");
        buttonDisable();
    } else if (playerScore === 5) {
        endgame("Player Wins!");
        buttonDisable();
    }
    gameCounter++;
}

function buttonDisable() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

let gameCounter = 0;

let roundContainer = '';
let roundWinnerDiv = '';

const scoreContainer = document.querySelector('.score-container');
const buttons = document.querySelectorAll('button');
const newGameButton = document.createElement('button');
newGameButton.addEventListener('click', () => {
    location.reload();
})

const gameContain = document.querySelector('.game-container');
const roundText = document.createElement('span');
const roundWinner = document.createElement('span');
const totals = document.getElementById('totals');
const newGame = document.querySelector('.new-game');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        game(playerSelection);
    });
});

let computerScore = 0;
let playerScore = 0; 


