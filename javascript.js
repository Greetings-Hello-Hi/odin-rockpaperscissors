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
// We can then pit ComputerChoice against HumanChoice.

