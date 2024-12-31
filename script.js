
/* Gets computer choice of moves.
    @return move
*/
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
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
    return choice[index];
}

console.log(getComputerChoice());

// function playRound(humanChoice, computerChoice) {
//     // your code here!
// }
  
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
  
// playRound(humanSelection, computerSelection);