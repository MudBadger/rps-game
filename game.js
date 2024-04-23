function playRound(playerChoice, computerChoice) {
    const winningMoves = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (playerChoice === computerChoice) {
        alert(`${playerChoice} VS ${computerChoice}! It's a tie! Play again!`);
        tie++;
    } else if (winningMoves[playerChoice] === computerChoice) {
        alert(`You win! ${playerChoice} beats ${computerChoice}`);
        youWin++;
    } else {
        alert(`You lose! ${computerChoice} beats ${playerChoice}`);
        computerWin++;
    }
}

function winner() {
    if (youWin > computerWin) {
        alert(
            `You win! Player : ${youWin} Computer : ${computerWin} Tie : ${tie}`
        );
    } else {
        alert(
            `You loose! Player : ${youWin} Computer : ${computerWin} Tie : ${tie}`
        );
    }
}

function game() {
    for (let i = 0; i <= 5; i++) {
        const playerChoice = prompt("Rock, paper or scissors? :").toLowerCase();
        const computerChoice =
            choicesArray[Math.floor(Math.random() * choicesArray.length)];
        console.log(playRound(playerChoice, computerChoice));
    }
    console.log(winner());
}

let youWin = 0,
    tie = 0,
    computerWin = 0;
const choicesArray = ["rock", "paper", "scissors"];
console.log(game());
