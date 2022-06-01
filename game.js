function computerPlay(arr){
    const randomMove = Math.floor(Math.random() * arr.length);
    const move = arr[randomMove];
    return move;
}

function playRound(playerSelection, computerSelection){
    if((playerSelection === moveArray[0] && computerSelection === moveArray[2]) || (playerSelection === moveArray[1] && computerSelection === moveArray[0]) || (playerSelection === moveArray[2] && computerSelection === moveArray[1])){
        console.log('You win');
    } else if(playerSelection === computerSelection){
        console.log("It's a tie!");
    } else {
        console.log("You lose!");
    }
}
const moveArray = ['rock', 'paper', 'scissors'];
const result = computerPlay(moveArray);

const playerSelection = prompt('Rock, paper or scissors? :');
const computerSelection = result;
console.log(playRound(playerSelection, computerSelection));
console.log("player : " +playerSelection);
console.log("computer : "+result);
