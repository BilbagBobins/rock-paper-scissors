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
    roundWinner.textContent = message;
    roundWinnerDiv.appendChild(roundWinner);
}

function endgame(winner) {
    const endText = document.createElement('div');
    endText.textContent = winner;
    winnerDiv.appendChild(endText);
    winnerDiv.appendChild(newGameButton);
    newGameButton.textContent = 'New Game';
}

function runningTotal(player,computer) {
    totals.textContent = (`Player: ${player} | Computer: ${computer}`);
    // if (scoreContainer.children.length > 0) {
    scoreContainer.replaceChild(totals, totals);
}

function game(playerSelection) {
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
}

function buttonDisable() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

const roundContainer = document.querySelector('.round-container');
const scoreContainer = document.querySelector('.score-container');
const winnerDiv = document.querySelector('.winner');
const buttons = document.querySelectorAll('button');
const roundWinnerDiv = document.querySelector('.round-winner');

const newGameButton = document.createElement('button');
newGameButton.addEventListener('click', () => {
    location.reload();
})

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


