/*
Within the playRound function:
    The randomInteger function helps randomize the computer choice, returning an integer from 0–8.
    The getComputerChoice function converts the random integer into rock, paper, or scissors (0–2 is rock, 3–5 is paper, and 6–8 is scissors).
    The humanInput function prompts for input from the human player.
    The getHumanChoice functions standardizes the human player’s input to lowercase.
    Then the computer’s choice is compared to the human’s choice.
    Finally, the winner of each round is determined and logged to the console. The winner’s score is incremented by 1.
If five scored rounds have been played, the playRound function compares the players’s scores and determines the winner of the entire game.
The playGame function uses a while loop to call playRound for five scored rounds.
*/

// The playGame function summons playRound for five scored rounds, using a while loop.
// Note: Tied rounds don’t count as rounds here.
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    // The variables humanScore and computerScore keep track of the players’ scores.
    let totalRounds = 0;
    // The totalRounds variable keeps track of the number of rounds.
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

// The below button function allows the human player to decide when to begin a new game.
const btn = document.querySelector("button");
btn.addEventListener("click", playGame);