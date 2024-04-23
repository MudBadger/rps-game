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
    if (!playerChoice) return;
    const computerChoice =
        choicesArray[Math.floor(Math.random() * choicesArray.length)];
    console.log(playRound(playerChoice, computerChoice));
}

const choiceContainer = document.querySelector("#choice-container");

choiceContainer.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case "scissors":
            playerChoice = "scissors";
            break;
        case "rock":
            playerChoice = "rock";
            break;
        case "paper":
            playerChoice = "paper";
            break;
    }
    choiceArray.push(playerChoice);
    console.log(choiceArray.length);
    if (choiceArray.length === 6) {
        console.log(winner());
    } else {
        console.log(game());
    }
});

let youWin = 0,
    tie = 0,
    computerWin = 0;
let playerChoice = "";
let choiceArray = [];

const choicesArray = ["rock", "paper", "scissors"];
