/*
    Creates game instance.
*/
class Score {
    constructor(humanScore, computerScore) {
        this.humanScore = 0;
        this.computerScore = 0;
    }
}

/* 
    Gets computer choice of moves.
    @return move
*/
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randInt = Math.random();
    let index = 0;
    if (randInt < 0.33) {
        index = 0;
    }
    else if (randInt > 0.33 && randInt < 0.67) {
        index = 1;
    }
    else {
        index = 2;
    }
    return choices[index];
}

/* 
    Gets human choice of moves.
    @return move
*/
function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let selection = null;

    while (true) {
        try {
            selection = prompt("What would you like to play?").trim().toLowerCase();
            if (selection === null) {
                console.log("Input canceled.");
                return null;
            }

            if (choices.includes(selection)) {
                return selection;
            } else {
                console.log("This is not a valid selection. Please choose rock, paper, or scissors.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
}

function playRound(score, humanChoice, computerChoice) {

    // Check if it's a tie
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice + ".");
        return "tie";
    }

    // Determine the winner
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        score.humanScore += 1;
        return "human";
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        score.computerScore += 1;
        return "computer";
    }
}

function playGame() {
    let score = new Score(0, 0);
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(score, humanSelection, computerSelection);
    }

    if (score.humanScore > score.computerScore) {
        console.log("You won the game. <:");
        console.log(score);
    }
    else if (score.humanScore < score.computerScore) {
        console.log("You lost the game. ):");
        console.log(score);
    }
    else {
        console.log("You tied the game!");
        console.log(score);
    }
}