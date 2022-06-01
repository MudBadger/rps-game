function computerPlay(arr){
    const randomMove = Math.floor(Math.random() * arr.length);
    const move = arr[randomMove];
    return move;
}

function playRound(playerSelection, computerSelection){
    if((playerSelection === moveArray[0] && computerSelection === moveArray[2]) || (playerSelection === moveArray[1] && computerSelection === moveArray[0]) || (playerSelection === moveArray[2] && computerSelection === moveArray[1])){
        console.log('You win');
        alert("player - " + playerSelection + "\ncomputer - " + computerSelection + "\nYOU WIN!")
    } else if(playerSelection === computerSelection){
        console.log("It's a tie!");
        alert("player - " + playerSelection + "\ncomputer - " + computerSelection + "\nIT'S A TIE!")

    } else {
        console.log("You lose!");
        alert("player - " + playerSelection + "\ncomputer - " + computerSelection + "\nYOU LOSE!")
    }
}
const moveArray = ['rock', 'paper', 'scissors'];

const playerSelection = prompt('Rock, paper or scissors? :');
const computerSelection = computerPlay(moveArray);
console.log(playRound(playerSelection, computerSelection));
console.log("player : " +playerSelection);
console.log("computer : " +computerSelection);
