function computerPlay() {
    const hand = ["Rock", "Paper", "Scissors"]
    const play = hand[Math.floor(Math.random() * hand.length)];
    return play;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Rock") {
            console.log("It's a Draw!?");
            return "draw";
        } else if (computerSelection === "Paper") {
            console.log("You Lose! Paper beats Rock");
            return "lose";
        } else {
            console.log("You Win! Rock beats Scissors");
            return "win";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Rock") {
            console.log("You Win! Paper beats Rock");
            return "win";
        } else if (computerSelection === "Paper") {
            console.log("It's a Draw!?");
            return "draw";
        } else {
            console.log("You Lose! Scissors beats Paper");
            return "lose";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Rock") {
            console.log("You Lose! Rock beats Scissors");
            return "lose";
        } else if (computerSelection === "Paper") {
            console.log("You Win! Scissors beats Paper");
            return "win";
        } else {
            console.log("It's a Draw!?");
            return "draw";
        } 
    } else {
        console.log("Need a choice to play");
    }

}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, Scissors... GO!");
        const computerSelection = computerPlay();
        console.log("Computer plays ", computerSelection);
        const game = playRound(playerSelection, computerSelection);
        if (game === "win") {
            playerCount++;
        } else if (game === "lose") {
            computerCount++;
        }
        console.log("Player wins: ", playerCount, "\n","Computer wins: ", computerCount);
    }
    if (playerCount > computerCount) {
        console.log("Player wins the game!")
    } else if (computerCount > playerCount) {
        console.log("Computer wins the game!")
    } else {
        console.log("It's a bloody draw!?");
    }
}

game();
