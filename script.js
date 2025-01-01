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
    const choices = ["stone", "scroll", "blade"];
    const randInt = Math.random();
    let index = 0;
    if (randInt < 0.33) {
        index = 0;
    } else if (randInt > 0.33 && randInt < 0.67) {
        index = 1;
    } else {
        index = 2;
    }
    return choices[index];
}

/*
    Handles a single round of play.
    Updates the score and logs the result.
*/
function playRound(score, humanChoice, computerChoice) {
    // Check if it's a tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return "tie";
    }

    // Determine the winner
    if (
        (humanChoice === "stone" && computerChoice === "blade") ||
        (humanChoice === "scroll" && computerChoice === "stone") ||
        (humanChoice === "blade" && computerChoice === "scroll")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        score.humanScore += 1;
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        score.computerScore += 1;
        return "computer";
    }
}

/*
    Initializes the game and waits for user input via clicks.
*/
function initGame() {
    const score = new Score();

    // Add click listeners to icons
    document.getElementById("stone").addEventListener("click", () => handleClick("stone", score));
    document.getElementById("scroll").addEventListener("click", () => handleClick("scroll", score));
    document.getElementById("blade").addEventListener("click", () => handleClick("blade", score));
}

/*
    Handles the user's click, determines the winner, and logs the result.
*/
function handleClick(humanChoice, score) {
    const computerChoice = getComputerChoice();
    const result = playRound(score, humanChoice, computerChoice);

    // Display result to the console
    if (result === "tie") {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (result === "human") {
        console.log(`You won this round! ${humanChoice} beats ${computerChoice}.`);
    } else {
        console.log(`You lost this round! ${computerChoice} beats ${humanChoice}.`);
    }

    // Update the scores
    console.log(`Current Score - You: ${score.humanScore}, Computer: ${score.computerScore}`);
}

/*
    Handles the user's click, determines the winner, and updates the UI.
*/
function handleClick(humanChoice, score) {
    const computerChoice = getComputerChoice();
    const result = playRound(score, humanChoice, computerChoice);

    // Update round result
    const roundResultElement = document.getElementById("round-result");
    if (result === "tie") {
        roundResultElement.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else if (result === "human") {
        roundResultElement.textContent = `You won this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        roundResultElement.textContent = `You lost this round! ${computerChoice} beats ${humanChoice}.`;
    }

    // Update scores
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Current Score: You: ${score.humanScore}, Computer: ${score.computerScore}`;
}


// Start the game
initGame();