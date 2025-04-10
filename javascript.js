// The randomInteger function helps randomize the computer choice, returning an integer from 0–8.
function randomInteger() {
    return Math.floor(Math.random() * 9);
}
let randomInt = randomInteger();

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
let computerChoice = getComputerChoice(randomInt);

// The humanInput function prompts for input from the human player.
let humanInput = window.prompt("Rock, paper, or scissors?");

// The getHumanChoice functions standardizes the human player's input to lowercase.
function getHumanChoice() {
    if (humanInput === null) {
        return "Try again";
    } else {
        return humanInput.toLowerCase();
    }
}
let humanChoice = getHumanChoice();
// We can then pit ComputerChoice against HumanChoice.
