function computerPlay(arr){
    const randomMove = Math.floor(Math.random() * arr.length);
    const move = arr[randomMove];
    return move;
}

const moveArray = ['Rock', 'Paper', 'Scissors'];
const result = computerPlay(moveArray);
console.log(result);
