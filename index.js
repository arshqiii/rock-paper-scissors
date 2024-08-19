console.log("Hello World");

const options = ["rock", "paper", "scissor"];
const numOfTurnsDisplay = document.getElementById("numOfTurns");
const userDisplay = document.getElementById("userChoiceDisplay");
const computerDisplay = document.getElementById("ComputerChoiceDisplay");
const userScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resultDisplay = document.getElementById("result");
const turns = 5
let userScore = 0;
let computerScore = 0;

function playRound(usersChoice){

    const computerChoice = options[Math.floor(Math.random() * 3)];
    // console.log(computerChoice);

};

function reset(){

};

