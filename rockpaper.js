var playerScore = 0;
var computerScore = 0;

function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    const array = ["rock", "paper", "scissors"]
    return array[i];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = computerPlay().toLowerCase();

    if (computerSelection === playerSelection) {
        return 0;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return -1;
    } else if (playerSelection == "scissor" && computerSelection == "scissor") {
        return -1;
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        return -1
    } else {
        return 1;
    }
}

