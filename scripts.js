function computerPlay(){
    let choice = ['Rock', 'Paper', 'Scissor'];
    return (choice[Math.floor(Math.random() * choice.length)]).toLowerCase();
}


let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection){
    if (computerSelection == playerSelection){
        console.log(`compoter select ${computerSelection}`);
        console.log("Draw");
    } else if (computerSelection == 'rock' && playerSelection == 'paper'){
        console.log(`compoter select ${computerSelection}`);
        console.log("You win");
        playerScore++;
    } else if (computerSelection == 'rock'  && playerSelection == 'scissor'){
        console.log(`compoter select ${computerSelection}`);
        console.log("You lose");
        computerScore++;
    } else if (computerSelection == 'paper' && playerSelection == 'rock'){
        console.log(`compoter select ${computerSelection}`);
        console.log("you lose");
        computerScore++;
    } else if (computerSelection == 'paper' && playerSelection == 'scissor'){
        console.log(`compoter select ${computerSelection}`);
        console.log('You win');
        playerScore++;
    } else if (computerSelection == "scissor" && playerSelection == 'paper'){
        console.log(`compoter select ${computerSelection}`);
        console.log("You lose");
        computerScore++;
    } else if (computerSelection == "scissor" && playerSelection == 'rock'){
        console.log(`compoter select ${computerSelection}`);
        console.log("You win");
        playerScore++;
    }
}




for (let i = 0; i < 4; i++) {
    const computerSelection = computerPlay()
    const playerSelection = prompt("Your choice?").toLowerCase()
    playRound(computerSelection, playerSelection)
    console.log(`your score: ${playerScore}, computer score: ${computerScore}`)
  } 

if (computerScore < playerScore){
    console.log("You did it, You won");
} else if (computerScore > playerScore){
    console.log("You fucking LOSSER");
} else {
    console.log("I expect more from you")
}