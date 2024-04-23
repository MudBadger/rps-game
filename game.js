function playRound(playerChoice, computerChoice) {
    const winningMoves = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (playerChoice === computerChoice) {
        scoreContainer.textContent = `${playerChoice} VS ${computerChoice}! It's a tie! Play again!`;
        tie++;
    } else if (winningMoves[playerChoice] === computerChoice) {
        scoreContainer.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        youWin++;
    } else {
        scoreContainer.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        computerWin++;
    }
}

function winner() {
    if (youWin > computerWin) {
        scoreContainer.textContent = `You win! Player : ${youWin} Computer : ${computerWin} Tie : ${tie}`;
    } else if (youWin < computerWin) {
        scoreContainer.textContent = `You loose! Player : ${youWin} Computer : ${computerWin} Tie : ${tie}`;
    } else {
        scoreContainer.textContent = `It's a tie! Player : ${youWin} Computer : ${computerWin} Tie : ${tie}`;
    }
}

function game() {
    playerChoiceArray.push(playerChoice);
    if (playerChoiceArray.length === 6) {
        winner();
        restartBtn.style.display = "block";
        choiceContainer.style.display = "none";
    } else {
        const computerChoice =
            choicesArray[Math.floor(Math.random() * choicesArray.length)];
        playRound(playerChoice, computerChoice);
    }
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
    game();
});
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", (event) => {
    playerChoiceArray = [];
    youWin = 0;
    tie = 0;
    computerWin = 0;
    restartBtn.style.display = "none";
    choiceContainer.style.display = "block";
});

const scoreContainer = document.querySelector("#score-container");

restartBtn.style.display = "none";
choiceContainer.style.display = "block";

let youWin = 0,
    tie = 0,
    computerWin = 0;
let playerChoice = "";
let playerChoiceArray = [];

const choicesArray = ["rock", "paper", "scissors"];
