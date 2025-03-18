function myFunction() {
    alert('Hello');
}

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * (3));
    return compChoice;
};

function convertToNum(num) {
    switch (num) {
        case "rock": return 0;
        case "paper": return 1;
        case "scissors": return 2;
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

/**
 * Event Listeners
 * on button click, determine the user's choice and disable other choices
 */
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    // add event listener for each button
    btn.addEventListener("click", () => {
        // disable other buttons
        btns.forEach((b) => {
            if (btn.id != b.id) {
                b.disabled = true;
            }
        })
        // simulate computer making choice
        setTimeout(() => {
            playRound(parseInt(btn.id)); // carry out round
        }, 1000);
    })
})

const results = document.querySelector("#results-feedback");
const hScore = document.querySelector("#human-score");
const cScore = document.querySelector("#computer-score");

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if (humanChoice - computerChoice === -1 || humanChoice - computerChoice === 2) {
        computerScore++;
        results.textContent = "(You) " + convertToRPS(humanChoice) + " vs. (Computer) " + convertToRPS(computerChoice) + "... " + "Computer wins!";
    }
    else if (humanChoice - computerChoice != 0) {
        humanScore++;
        results.textContent = "(You) " + convertToRPS(humanChoice) + " vs. (Computer) " + convertToRPS(computerChoice) + "... " + "You win!";

    }
    else {
        results.textContent = "(You) " + convertToRPS(humanChoice) + " vs. (Computer) " + convertToRPS(computerChoice) + "... " + "Tie!";
    }

    btns.forEach((btn) => {
        btn.disabled = false;
    })

    hScore.textContent = humanScore;
    cScore.textContent = computerScore;

    if (humanScore == 2 || computerScore == 2) {
        btns.forEach((btn) => {
            btn.disabled = true;
        })
        const innerContainer = document.querySelector(".inner-container");
        innerContainer.style.backgroundColor = "#f6f6f6";
        const h1 = document.querySelector(".inner-container h1");
        if (humanScore > computerScore) {
            h1.textContent = "You win!";
        }
        else {
            h1.textContent = "You lose!"
        }
        results.textContent = "Game over!";
        setTimeout(() => {
            location.reload();
        }, 5000);
    }

}