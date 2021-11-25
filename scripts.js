function computerPlay(){
    let choice = ['Rock', 'Paper', 'Scissor'];
    return (choice[Math.floor(Math.random() * choice.length)]).toLowerCase();
}


let playerScore = 0;
let computerScore = 0;

function playRound(img){
    const computerSelection = computerPlay();
    const playerSelection = img.alt;
    const remark = document.querySelector('.remark')
    if (computerSelection == playerSelection){
        remark.textContent = ".";
        remark.textContent = "Draw";
    } else if (computerSelection == 'rock' && playerSelection == 'paper'){
        remark.textContent = "You win";
        playerScore++;
    } else if (computerSelection == 'rock'  && playerSelection == 'scissor'){
        remark.textContent = "."
        remark.textContent = "You loose";
        computerScore++;
    } else if (computerSelection == 'paper' && playerSelection == 'rock'){
        remark.textContent = ".";
        remark.textContent = "You loose";
        computerScore++;
    } else if (computerSelection == 'paper' && playerSelection == 'scissor'){
        remark.textContent = ".";
        remark.textContent = "You win";
        playerScore++;
    } else if (computerSelection == "scissor" && playerSelection == 'paper'){
        remark.textContent = ".";
        remark.textContent = "You loose";
        computerScore++;
    } else if (computerSelection == "scissor" && playerSelection == 'rock'){
        remark.textContent = ".";
        remark.textContent = "You win";
        playerScore++;
    }
}

const btns = document.querySelectorAll('.btn');
console.log(btns);
for (let i = 0; i< btns.length; i++){
    btns[i].addEventListener("click", function game(){
        const img = btns[i].querySelector("img");
        playRound(img);
        const yourResult = document.querySelector('.you');
        const computerResult = document.querySelector(".computer");
        yourResult.textContent = playerScore;
        computerResult.textContent = computerScore;
        if (playerScore == 4 || computerScore == 4){
            winnerSelection(playerScore, computerScore);
            playerScore = 0;
            computerScore = 0;
        }
    })
}


    
function winnerSelection(playerScore, computerScore) {
    const remark = document.querySelector('.remark')
    if (computerScore < playerScore){
        remark.textContent = "You did it, You won"
    } else if (computerScore > playerScore){
        remark.textContent = "You fucking LOSSER"
    } else {
        remark.textContent = "I expect more from you"
    }
}


