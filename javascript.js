// The RandomInteger function helps randomize the computer choice, returning an integer from 0–8.
function RandomInteger() {
    return Math.floor(Math.random() * 9);
}
let RandomInt = RandomInteger();
// The getComputerChoice function converts the random integer into rock, paper, or scissors.
// 0–2 is rock, 3–5 is paper, and 6–8 is scissors.
function getComputerChoice(RandomInt) {
    if (RandomInt <= 2) {
        return "rock";
    } else if (RandomInt <= 5) {
        return "paper";
    } else {
        return "scissors";
    }
}
let ComputerChoice = getComputerChoice(RandomInt);
// The humanInput function prompts for input from the human player.
let humanInput = window.prompt("Rock, paper, or scissors?");
// The getHumanChoice functions standardizes the human player's input to lowercase.
function getHumanChoice() {
    return humanInput.toLowerCase();    
}
let HumanChoice = getHumanChoice();
// We can then pit ComputerChoice against HumanChoice.
