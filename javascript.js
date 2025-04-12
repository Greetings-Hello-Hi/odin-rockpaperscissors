// The playGame function summons the playRound function for five scored rounds, using a while loop.
// Note: Tied rounds don’t count as rounds here.

function playGame() {
    
    // The variables humanScore and computerScore keep track of the players’ scores.
    let humanScore = 0;
    let computerScore = 0;
    
    // The totalRounds variable keeps track of the number of rounds.
    let totalRounds = 0;
    
    // The playRound function contains the randomInteger, getComputerChoice, humanInput, and getHumanChoice functions (more info is below).
    let playRound = function() {
        // When five rounds have been played, playRound compares the players’ scores and logs the game winner to the console.
        if (totalRounds == 5) {
            if (humanScore > computerScore) {
                console.log(`You win the game! Your total score of ${humanScore} beat the computer’s total score of ${computerScore}!`);
            } else if (humanScore < computerScore) {
                console.log(`You lost the game. The computer’s total score of ${computerScore} beat your total score of ${humanScore}.`);
            } else {
                console.log(`It’s a tie, somehow!`);
            }
        // If fewer than five rounds have been played, playRound requests human input, compares it to the computer choice, and logs a result to the console.
        } else if (totalRounds < 5) {
            
            // The humanInput function prompts for input from the human player.
            let humanInput = window.prompt("Rock, paper, or scissors?");
            
            // The getHumanChoice function standardizes the human player’s input to lowercase or returns “null” if the player clicks Cancel in the prompt.
            let getHumanChoice = function(humanInput) {
                if (humanInput === null) {
                    return "null";
                } else {
                    return humanInput.toLowerCase();
                }
            };
            
            // The randomInteger function helps randomize the computer choice, returning an integer from 0–8.
            let randomInteger = function() {
            return Math.floor(Math.random() * 9);
            };
            let randomInt = randomInteger();
            
            // The getComputerChoice function converts the computer-generated random integer into “rock,” “paper,” or “scissors.”
            // 0–2 is rock, 3–5 is paper, and 6–8 is scissors.
            let getComputerChoice = function(randomInt) {
                if (randomInt <= 2) {
                    return "rock";
                } else if (randomInt <= 5) {
                    return "paper";
                } else {
                    return "scissors";
                }
            };
            
            // The below conditionals compare the human’s choice to the computer’s choice and log a result.
            // If there is a winner of the round, the winner’s score is increased by 1.
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
            // The below conditional accounts for the possibility of a tie and adjusts the totalRounds variable so this round isn't counted.
            } else if (getHumanChoice(humanInput) == getComputerChoice(randomInt)) {
                console.log("It’s a tie, so try again!");
                totalRounds = totalRounds - 1;
                console.log(`You:${humanScore}, Computer:${computerScore}`);
            // The below conditional accounts for the possibility of the human player clicking “Cancel” in the prompt window.
            } else if (getHumanChoice(humanInput) == "null") {
                totalRounds = 6;
                console.log(`The game ended because you hit “Cancel.” Try again!`);
            // The below conditional accounts for the possiblity of the human player entering input that isn't “rock,” “paper,” or “scissors.”
            // The below conditional also adjusts the totalRounds variable so this invalid round isn't counted.
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