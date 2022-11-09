// Your JavaScript goes here!
var rps = ['rock', 'paper', 'scissor']

function getComputerChoice(rps) {
    return rps[Math.floor(Math.random()*rps.length)]
}

let computerSelection = getComputerChoice(rps).toString().toLowerCase();

//Computer makes a random choice
//Player chooses input
//Computer and player choices are compared

let playerSelection = prompt('Rock? Paper? or Scissors?');
playerSelection = playerSelection.toLowerCase();

console.log('you chose ' + playerSelection + '!');
console.log('Computer chose ' + computerSelection);


function playRound(player, computer) {
   if ((player === 'rock' && computer === 'paper')
   || (player === 'paper' && computer === 'scissor') 
   || (player === 'scissor' && computer === 'rock')){
    return ('You lose');
   }
   else if ((player === 'rock' && computer === 'scissor')
   || (player === 'paper' && computer === 'rock') 
   || (player === 'scissor' && computer === 'paper'))
   {
    return ('YOU WIN!!');
   }
   else if (player === computer){
    return ('Tie');
   }
}

console.log(playRound(playerSelection,computerSelection))

for (let round = 0; round < 5; round++) { //looping 5 times
    
    let playerSelection = prompt('Rock? Paper? or Scissors?'); //user inputs 5 times
    playerSelection = playerSelection.toLowerCase();
    
    let computerSelection = getComputerChoice(rps).toString().toLowerCase(); //random computer selection 5 times
    
    console.log('you chose ' + playerSelection + '!'); //displays player choice
    console.log('Computer chose ' + computerSelection); //displays computer choice

    let round = playRound(playerSelection, computerSelection); //runs each round in the game
    console.log(round) //logs each result
}

//run loop for 5 times
//get results for 5 games
//compare results to get winner best of 5
