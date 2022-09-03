let playerScore = 0;
let computerScore = 0;
let gamePlayed = 1;

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
    
    //Play round if neither computer nor player score reaches 5
    if (computerScore !== 5 && playerScore !== 5){
        //Prompt player input
        playerSelection = this.className;

        //Make playerSelection case-insensitive
        //playerSelection = playerSelection.toLowerCase();

        //Get computerSelection
        computerSelection = getComputerChoice();
        computer[0].textContent = "Your AI Opponent chooses: " + computerSelection.toUpperCase() + "!";

        round[0].textContent = "Round " + gamePlayed;

        //Record round played
        gamePlayed++;

        //Compare playerSelection with computerSelection
        if (playerSelection === computerSelection){
            score[0].textContent = playerScore + " : " + computerScore;
        }
        else if (playerSelection === "paper" && computerSelection === "rock"){
            playerScore ++;
            score[0].textContent = playerScore + " : " + computerScore;
        }
        else if (playerSelection === "rock" && computerSelection === "paper"){
            computerScore ++;
            score[0].textContent = playerScore + " : " + computerScore;
        }
        else if (playerSelection === "scissors" && computerSelection === "paper"){
            playerScore ++;
            score[0].textContent = playerScore + " : " + computerScore;
        }
        else if (playerSelection === "paper" && computerSelection === "scissors"){
            computerScore ++;
            score[0].textContent = playerScore + " : " + computerScore;
        }
        else if (playerSelection === "rock" && computerSelection === "scissors"){
            playerScore ++;
            score[0].textContent = playerScore + " : " + computerScore;
        }
        else if (playerSelection === "scissors" && computerSelection === "rock"){
            computerScore ++;
            score[0].textContent = playerScore + " : " + computerScore;
        }

        //If computer or player score equals 5, push win text
        if (computerScore === 5){
            win[0].textContent = "AI wins!";
        }
        else if (playerScore === 5){
            win[0].textContent = "Player wins!";
        }
    }
    else{
        return buttons.forEach((button)=>{button.removeEventListener("click", playRound)});
    }
    
}


const computer = document.getElementsByClassName("computer-select");
const round = document.getElementsByClassName("round");
const score = document.getElementsByClassName("score");
const win = document.getElementsByClassName("win-message");
const div = document.querySelector("div");
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click", playRound);
    button.addEventListener("mouseover", ()=>{button.setAttribute('style', 'width: 190px; height: 190px; margin: 0 60px;');});
    button.addEventListener("mouseout", ()=>{button.removeAttribute('style');});
});

