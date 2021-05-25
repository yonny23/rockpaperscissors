var playerSelection = prompt("Do you choose rock, paper, or scissors");
var computerSelection = Math.random();

if (computerSelection < 0.34) {
    computerSelection = "rock";
} else if (computerSelection <= 0.67) {
    computerSelection = "paper";
} else {
    computerSelection = "scissors";
}
console.log("Computer: " + computerSelection);


function playRound(choice1, choice2) {
    if (choice1 === choice2) {
        return "The results are a tie";
    } else if {
        (choice 1 === "rock") {
            if (choice2 === "scissors") {
                return "rock wins";
            }
        } else {
            return "paper wins";
        } else if (choice2 === "paper") {
            if (choice2 === "rock") {
                return "paper wins";
            } else {
                return "scissors wins";
            }
        }