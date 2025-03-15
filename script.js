function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * (3));
    return compChoice;
};

function getHumanChoice() {
    let choice = prompt("Enter your Choice (Rock, Paper, Scissors): ");
    choice = choice.toUpperCase();
    switch (choice) {
        case "R":
        case "ROCK": return 0;
        case "P":
        case "PAPER": return 1;
        case "S":
        case "SCISSORS": return 2;
        default: 
            console.log("ERROR: invalid choice... choosing random...");
            return getComputerChoice();
    }
}

function convertToRPS(c) {
    switch (c) {
        case 0: return "ROCK";
        case 1: return "PAPER";
        case 2: return "SCISSORS";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (humanChoice - computerChoice === -1 || humanChoice - computerChoice === 2) {
        computerScore++;
        console.log("(You) " + convertToRPS(humanChoice) + " vs. (Computer) " + convertToRPS(computerChoice) + "... " + "Computer wins!");
    }
    else if (humanChoice - computerChoice != 0) {
        humanScore++;
        console.log("(You) " + convertToRPS(humanChoice) + " vs. (Computer) " + convertToRPS(computerChoice) + "... " + "You win!");

    }
    else {
        console.log("(You) " + convertToRPS(humanChoice) + " vs. (Computer) " + convertToRPS(computerChoice) + "... " + "Tie!");
    }
}

for (let i = 0; i < 5; i++) {
    playRound();
}

console.log("-------------------")
console.log("Computer Score: " + computerScore);
console.log("Your Score: " + humanScore);
if (computerScore > humanScore) {
    console.log("Computer Wins Overall!");
}
else if (computerScore < humanScore) {
    console.log("You Win Overall!");
}
else {
    console.log("It's a tie!");
}