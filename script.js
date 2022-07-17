const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('input');

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerSelection = "rock";
let computerSelection = getComputerChoice(); 

function playRound(playerSelection, computerSelection) {
    if((playerSelection == "paper" && computerSelection == "rock") || 
       (playerSelection == "scissors" && computerSelection == "paper") || 
       (playerSelection == "rock" && computerSelection == "scissors")) {
        // player win = 0
        return 0; 
    } else if(playerSelection == computerSelection) {
        // computer win = 1
        return 2;
    } else {
        //
        return 1;
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for(i = 0; i < 5; i++) {
        console.log("Round number " + (i + 1))
        computerSelection = getComputerChoice();
        playerSelection = prompt("rock, paper, scissors?");
        let roundResult = playRound(playerSelection, computerSelection);
        if(roundResult == 0) {
            playerScore++;
            console.log("You won this round\nYour choice was: "+ playerSelection +"\nComputer choice was: " + computerSelection);
        } else if(roundResult == 1) {
            computerScore++;
            console.log("You lost this round\nYour choice was: "+ playerSelection +"\nComputer choice was: " + computerSelection);
        } else {
            console.log("Round draw");
        }
    }

    finalResult = ""
    if(playerScore > computerScore) {
        finalResult = "You won! Your score is " + playerScore + " Computer score is " + computerScore;
    } else if(playerScore == computerScore) {
        finalResult = "It's a draw! Your score is " + playerScore + " Computer score is " + computerScore;
    } else {
        finalResult = "You lost! Your score is " + playerScore + " Computer score is " + computerScore;
    }

    return finalResult;
}

result = game();
console.log(result);

