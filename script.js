let playerScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let choice = Math.floor(Math.random()*3);

    if (choice === 0){
        return "rock";
    }
    else if (choice === 1){
        return "paper";
    }
    else if (choice === 2){
        return "scissors";
    }
}


function playRound (playerSelection, computerSelection){
    //Prompt player input
    playerSelection = prompt("Rock, paper, or scissors?");

    //Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    //Get computerSelection
    computerSelection = getComputerChoice();

    //Compare playerSelection with computerSelection
    if (playerSelection === computerSelection){
        playerScore ++;
        computerScore ++;
        return `It's a tie! ${playerSelection} equals ${playerSelection}.`;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore ++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore ++;
        return `You lose! ${playerSelection} loses to ${computerSelection}.`;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore ++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore ++;
        return `You lose! ${playerSelection} loses to ${computerSelection}.`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore ++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore ++;
        return `You lose! ${playerSelection} loses to ${computerSelection}.`;
    }
}

function game (){
    for (let i = 0; i < 5; i++){
        console.log(playRound());
    }
    if (playerScore === computerScore){
        console.log("It's a tie!");
    }
    else if (playerScore > computerScore){
        console.log("You won this round!");
    }
    else{
        console.log("You lost this round!");
    }
}

game();