// The variables humanScore and computerScore keep track of the players' scores.
let humanScore = 0;
let computerScore = 0;

// The randomInteger function helps randomize the computer choice, returning an integer from 0–8.
function randomInteger() {
    return Math.floor(Math.random() * 9);
}
const randomInt = randomInteger();

// The getComputerChoice function converts the random integer into rock, paper, or scissors.
// 0–2 is rock, 3–5 is paper, and 6–8 is scissors.
function getComputerChoice(randomInt) {
    if (randomInt <= 2) {
        return "rock";
    } else if (randomInt <= 5) {
        return "paper";
    } else {
        return "scissors";
    }
}
const computerChoice = getComputerChoice(randomInt);

// The humanInput function prompts for input from the human player.
const humanInput = window.prompt("Rock, paper, or scissors?");

// The getHumanChoice functions standardizes the human player's input to lowercase.
function getHumanChoice() {
    if (humanInput === null) {
        console.log("Try again!");
    } else {
        return humanInput.toLowerCase();
    }
}
const humanChoice = getHumanChoice();

// We can then pit computerChoice against humanChoice using the playRound function.
function playRound(human, computer) {
    if (human == "rock" && computer == "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore = ++humanScore;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == "paper" && computer == "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore = ++humanScore;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == "scissors" && computer == "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore = ++humanScore;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == "rock" && computer == "paper") {
        console.log("You lose. Paper beats Rock.");
        computerScore = ++computerScore;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == "paper" && computer == "scissors") {
        console.log("You lose. Scissors beats Paper.");
        computerScore = ++computerScore;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == "scissors" && computer == "rock") {
        console.log("You lose. Rock beats Scissors.");
        computerScore = ++computerScore;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == computer) {
        console.log("It's a tie, so try again!");
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else {
        console.log("Invalid round.");
    }
}

playRound(humanChoice, computerChoice);