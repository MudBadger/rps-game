
function computerPlay(arr){
    const randomMove = Math.floor(Math.random() * arr.length);
    const computerMove = arr[randomMove];
    return computerMove;
}


function playRound(playerSelection, computerSelection){

    if((playerSelection === moveArray[0] && computerSelection === moveArray[2])
             || (playerSelection === moveArray[1] && computerSelection === moveArray[0])
              || (playerSelection === moveArray[2] && computerSelection === moveArray[1])){
        alert("You win! " + playerSelection + " beats " + computerSelection);
        youWin++;
    } else if(playerSelection === computerSelection){
        alert(playerSelection + " VS " + computerSelection + "! It's a tie!");
        tie++;
    } else {
        alert("You lose! " + computerSelection + " beats " + playerSelection);
        computerWin++;
    }
    return;
}

function winner(){
    if((youWin < tie && computerWin < tie && youWin === computerWin)
            || youWin === computerWin){
        alert('It\'s a Tie! Player :' + youWin + ' Computer :' + computerWin + ' Tie :' + tie);
    } else if (youWin > computerWin){
        alert('You win! Player :' + youWin + ' Computer :' + computerWin + ' Tie :' + tie);
    } else {
        alert('You lose! Player :' + youWin + ' Computer :' + computerWin + ' Tie :' + tie);
    }
    return;
}

function playerPrompt(){
    const playerChoice = prompt('Rock, paper or scissors? :');
    const playerMove= playerChoice.toLowerCase();
    return playerMove;
}

function game(){
    for(let i=1; i<=5; i++){
        const playerSelection= playerPrompt();
        const computerSelection = computerPlay(moveArray);
        console.log(playRound(playerSelection,computerSelection));
    }
    console.log(winner());
    return;
}

let youWin = 0;
let computerWin = 0;
let tie = 0;
const moveArray = ['rock', 'paper', 'scissors'];
console.log(game());

