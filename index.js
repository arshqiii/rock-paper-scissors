console.log("Hello World");

const options = ['rock', 'paper', 'scissor'];
const numOfTurnsDisplay = document.getElementById("numOfTurns");
const userChoiceDisplay = document.getElementById("userChoiceDisplay");
const computerChoiceDisplay = document.getElementById("ComputerChoiceDisplay");
const userScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resultDisplay = document.getElementById("result");
let turns = 5
let userScore = 0;
let computerScore = 0;

function playRound(usersChoice){

    const computerChoice = options[Math.floor(Math.random() * 3)];
    let result = "";
    console.log(computerChoice);

    if (usersChoice === computerChoice){
        result = "ITS A TIE"
    } else if (usersChoice === 'rock' && computerChoice === 'scissor'){
        result = "YOU WIN!"
    } else if (usersChoice === 'paper' && computerChoice === 'rock'){
        result = "YOU WIN!"
    } else if (usersChoice === 'paper' && computerChoice === 'rock'){
        result = "YOU WIN!"
    } else {
        result = "YOU LOSE!"
    }

    userChoiceDisplay.textContent = usersChoice;
    computerChoiceDisplay.textContent = computerChoice;
    resultDisplay.textContent = result;
    
};

function reset(){

};

