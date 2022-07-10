
function computerPlay(arr){
    const randomMove = Math.floor(Math.random() * arr.length);
    const computerMove = arr[randomMove];
    return computerMove;
}

function playRound(playerSelection, computerSelection){

    if((playerSelection === moveArray[0] && computerSelection === moveArray[2]) || (playerSelection === moveArray[1] && computerSelection === moveArray[0]) || (playerSelection === moveArray[2] && computerSelection === moveArray[1])){
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        alert("You win! " + playerSelection + " beats " + computerSelection);
    } else if(playerSelection === computerSelection){
        console.log("It's a tie!");
        alert(playerSelection + " VS " + computerSelection + "! It's a tie!")
    } else {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        alert("You lose! " + computerSelection + " beats " + playerSelection);
    }
    return;
}

function game(){
    for(let i=1; i<=5; i++){
        const playerMove = prompt('Rock, paper or scissors? :')
        const playerSelection = playerMove.toLowerCase();
        const computerSelection = computerPlay(moveArray);
        console.log(playRound(playerSelection,computerSelection))
        console.log("player : " +playerSelection);
        console.log("computer : " +computerSelection);
    }
    return;
}


const moveArray = ['rock', 'paper', 'scissors'];
console.log(game());