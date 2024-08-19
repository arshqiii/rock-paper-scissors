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
    let result = ""; //initialize result placeholder

    
    if (turns != 1){
        if (usersChoice === computerChoice){
            result = "ITS A TIE";
            turns--
        } else if (usersChoice === 'rock' && computerChoice === 'scissor'){
            result = "YOU WIN!";
            userScore++;
            turns--
        } else if (usersChoice === 'paper' && computerChoice === 'rock'){
            result = "YOU WIN!";
            userScore++;
            turns--
        } else if (usersChoice === 'paper' && computerChoice === 'rock'){
            result = "YOU WIN!";
            userScore++;
            turns--
        } else {
            result = "YOU LOSE!";
            computerScore++
            turns--
        }

        userChoiceDisplay.textContent = usersChoice;
        computerChoiceDisplay.textContent = computerChoice;
        computerScoreDisplay.textContent = computerScore;
        userScoreDisplay.textContent = userScore;
        numOfTurnsDisplay.textContent = `User has ${turns} turns left`;
        resultDisplay.textContent = result;
    } else {
        turns--
        if (userScore == computerScore){
            alert("NOBODY WON, ITS A TIE");
            reset();
        } else if (userScore > computerScore){
            alert("YEYY YOU WON!!\n" + `User: ${userScore}, Computer: ${computerScore}`);
            reset();
        } else {
            alert("YOU LOST, MAYBE NEXT TIME\n" + `User: ${userScore}, Computer: ${computerScore}`);
            reset();
        }
    }
};

function reset(){
    turns = 5
    userScore = 0
    computerScore = 0
    userChoiceDisplay.textContent = " ";
    computerChoiceDisplay.textContent = " ";
    computerScoreDisplay.textContent = 0;
    userScoreDisplay.textContent = 0;
    numOfTurnsDisplay.textContent = `User has 5 turns`;
    resultDisplay.textContent = "";
};

