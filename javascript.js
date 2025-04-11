/*
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

// The getHumanChoice functions standardizes the human player's correct input to lowercase.
function getHumanChoice() {
    if (humanInput === null) {
        console.log("Try again!");
    } else {
        return humanInput.toLowerCase();
    }
}
const humanChoice = getHumanChoice();

// We can then pit computerChoice against humanChoice using the playRound function.
// The totalRounds variable keeps track of the number of rounds.
// let totalRounds = 0;

function playRound(human, computer) {
    if (human == "rock" && computer == "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore = ++humanScore;
        totalRounds = ++totalRounds;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == "paper" && computer == "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore = ++humanScore;
        totalRounds = ++totalRounds;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == "scissors" && computer == "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore = ++humanScore;
        totalRounds = ++totalRounds;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == "rock" && computer == "paper") {
        console.log("You lose. Paper beats Rock.");
        computerScore = ++computerScore;
        totalRounds = ++totalRounds;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == "paper" && computer == "scissors") {
        console.log("You lose. Scissors beats Paper.");
        computerScore = ++computerScore;
        totalRounds = ++totalRounds;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == "scissors" && computer == "rock") {
        console.log("You lose. Rock beats Scissors.");
        computerScore = ++computerScore;
        totalRounds = ++totalRounds;
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else if (human == computer) {
        console.log("It's a tie, so try again!");
        console.log(`You:${humanScore}, Computer:${computerScore}`);
    } else {
        console.log("Invalid round.");
    }
}
    */

//playRound(humanChoice, computerChoice);

// The playGame function summons playRound for five non-tied rounds.
/*
function playGame(totalRounds) {
    let humanScore = 0;
    let computerScore = 0;
    let playRound = function() {
        let humanInput = window.prompt("Rock, paper, or scissors?");
        let getHumanChoice = function(humanInput) {
            if (humanInput === null) {
                console.log("Try again!");
            } else {
                return humanInput.toLowerCase();
            }
        };
        let randomInteger = function() {
            return Math.floor(Math.random() * 9);
        };
        let randomInt = randomInteger();
        let getComputerChoice = function(randomInt) {
            if (randomInt <= 2) {
                return "rock";
            } else if (randomInt <= 5) {
                return "paper";
            } else {
                return "scissors";
            }
        };
        if (totalRounds == 5) {
            if (humanScore > computerScore) {
                console.log(`You win the game! Your total score of ${humanScore} beat the computer's total score of ${computerScore}!`);
                //alert('The game has ended. Refresh the page to begin a new game!');
                return;
                // return totalRounds = 0;
            } else if (humanScore < computerScore) {
                console.log(`You lost the game. The computer's total score of ${computerScore} beat your total score of ${humanScore}.`);
                //alert('The game has ended. Refresh the page to begin a new game!');
                return;
                // return totalRounds = 0;
            } else {
                console.log(`It's a tie, somehow!`);
                return;
            }
        } else if (getHumanChoice(humanInput) == "rock" && getComputerChoice(randomInt) == "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore = ++humanScore;
//            totalRounds = ++totalRounds;
            console.log(`You:${humanScore}, Computer:${computerScore}`);
        } else if (getHumanChoice(humanInput) == "paper" && getComputerChoice(randomInt) == "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore = ++humanScore;
//            totalRounds = ++totalRounds;
            console.log(`You:${humanScore}, Computer:${computerScore}`);
        } else if (getHumanChoice(humanInput) == "scissors" && getComputerChoice(randomInt) == "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore = ++humanScore;
//            totalRounds = ++totalRounds;
            console.log(`You:${humanScore}, Computer:${computerScore}`);
        } else if (getHumanChoice(humanInput) == "rock" && getComputerChoice(randomInt) == "paper") {
            console.log("You lose. Paper beats Rock.");
            computerScore = ++computerScore;
//            totalRounds = ++totalRounds;
            console.log(`You:${humanScore}, Computer:${computerScore}`);
        } else if (getHumanChoice(humanInput) == "paper" && getComputerChoice(randomInt) == "scissors") {
            console.log("You lose. Scissors beats Paper.");
            computerScore = ++computerScore;
//            totalRounds = ++totalRounds;
            console.log(`You:${humanScore}, Computer:${computerScore}`);
        } else if (getHumanChoice(humanInput) == "scissors" && getComputerChoice(randomInt) == "rock") {
            console.log("You lose. Rock beats Scissors.");
            computerScore = ++computerScore;
//            totalRounds = ++totalRounds;
            console.log(`You:${humanScore}, Computer:${computerScore}`);
        } else if (getHumanChoice(humanInput) == getComputerChoice(randomInt)) {
            console.log("It's a tie, so try again!");
            //totalRounds = ++totalRounds;
            console.log(`You:${humanScore}, Computer:${computerScore}`);
        } else {
            console.log("Invalid round.");
            //totalRounds = ++totalRounds;
        }
    };
        while (totalRounds <= 5) {
            if (totalRounds > 5) {
                break;
            }
            playRound();
            totalRounds++;
        }
    }

playGame(0);
alert('The game has ended. Refresh the page to begin a new game!');
*/

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let totalRounds = 0;
    let playRound = function() {
        if (totalRounds == 5) {
            if (humanScore > computerScore) {
                console.log(`You win the game! Your total score of ${humanScore} beat the computer’s total score of ${computerScore}!`);
            } else if (humanScore < computerScore) {
                console.log(`You lost the game. The computer’s total score of ${computerScore} beat your total score of ${humanScore}.`);
            } else {
                console.log(`It’s a tie, somehow!`);
            }
        } else if (totalRounds < 5) {
            let humanInput = window.prompt("Rock, paper, or scissors?");
            let getHumanChoice = function(humanInput) {
                if (humanInput === null) {
                    return "null";
            //      console.log(`The game has ended because you hit “Cancel.” Try again!`);
            //      return totalRounds = 6;
                } else {
                    return humanInput.toLowerCase();
                }
            };
            let randomInteger = function() {
            return Math.floor(Math.random() * 9);
            };
            let randomInt = randomInteger();
            let getComputerChoice = function(randomInt) {
                if (randomInt <= 2) {
                    return "rock";
                } else if (randomInt <= 5) {
                    return "paper";
                } else {
                    return "scissors";
                }
            };
            if (getHumanChoice(humanInput) == "rock" && getComputerChoice(randomInt) == "scissors") {
                console.log("You win! Rock beats Scissors.");
                humanScore = ++humanScore;
                console.log(`You:${humanScore}, Computer:${computerScore}`);
            } else if (getHumanChoice(humanInput) == "paper" && getComputerChoice(randomInt) == "rock") {
                console.log("You win! Paper beats Rock.");
                humanScore = ++humanScore;
                console.log(`You:${humanScore}, Computer:${computerScore}`);
            } else if (getHumanChoice(humanInput) == "scissors" && getComputerChoice(randomInt) == "paper") {
                console.log("You win! Scissors beats Paper.");
                humanScore = ++humanScore;
                console.log(`You:${humanScore}, Computer:${computerScore}`);
            } else if (getHumanChoice(humanInput) == "rock" && getComputerChoice(randomInt) == "paper") {
                console.log("You lose. Paper beats Rock.");
                computerScore = ++computerScore;
                console.log(`You:${humanScore}, Computer:${computerScore}`);
            } else if (getHumanChoice(humanInput) == "paper" && getComputerChoice(randomInt) == "scissors") {
                console.log("You lose. Scissors beats Paper.");
                computerScore = ++computerScore;
                console.log(`You:${humanScore}, Computer:${computerScore}`);
            } else if (getHumanChoice(humanInput) == "scissors" && getComputerChoice(randomInt) == "rock") {
                console.log("You lose. Rock beats Scissors.");
                computerScore = ++computerScore;
                console.log(`You:${humanScore}, Computer:${computerScore}`);
            } else if (getHumanChoice(humanInput) == getComputerChoice(randomInt)) {
                console.log("It’s a tie, so try again!");
                totalRounds = totalRounds - 1;
                console.log(`You:${humanScore}, Computer:${computerScore}`);
            } else if (getHumanChoice(humanInput) == "null") {
                totalRounds = 6;
                console.log(`The game ended because you hit “Cancel.” Try again!`);
            } else {
                totalRounds = totalRounds - 1;
                console.log("Invalid input.");
            }
        };
    }
        while (totalRounds <= 5) {
            if (totalRounds > 5) {
                break;
            }
            playRound();
            totalRounds++;
        }
}

const btn = document.querySelector("button");
btn.addEventListener("click", playGame);