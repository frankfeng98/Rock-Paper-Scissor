let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
const container = document.querySelector('#container');
let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('#result');

rock.addEventListener('click', () => {handleClick('rock')});

paper.addEventListener('click', () => {handleClick('paper')});

scissor.addEventListener('click', () => {handleClick('scissor')});

if (playerScore === 5){
    console.log('player Win!')
}

if (computerScore === 5){
    console.log('computer Win!')
}


function computerPlay(){
    //randomly return number between 0 and 2, respectively stands for Rock, Paper and Scissor
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection){
    console.log('round played');
    let playerChoice = playerSelection.toLowerCase();
    if (playerChoice === "rock"){
        if (computerSelection === 0){
            return 11; //"Tie! You both throw Rock";
        } else if (computerSelection === 1){
            computerScore++;
            return 12; //"You lose! Paper beats Rock";
        } else {
            playerScore++;
            return 13; //"You win! Rock beats Scissor";
        }
    } else if (playerChoice === "paper"){
        switch (computerSelection){
            case 0:
                playerScore++;
                return 21; //"You win! Paper beats Rock";
            case 1:
                return 22; //"Tie! You both throw paper";
            case 2:
                computerScore++;
                return 23; //"You lose! Scissor beats paper";
        }
    } else if (playerChoice === "scissor"){
        switch (computerSelection){
            case 0:
                computerScore++;
                return 31; //"You lose! Rock beats Scissor";
            case 1:
                playerScore++;
                return 32; //"You win! Scissor beats paper";
            case 2:
                return 33; //"Tie! You both throw scissor";
        }
    } else {
        console.log("Invalid entry");
        prompt("Please enter again.");
    }
}


function handleClick(playerSelection){
    let roundResult = playRound(playerSelection, computerPlay());
    let div = document.createElement('div');
    container.appendChild(div);
    switch (roundResult){
        case 11:
            div.textContent = "Tie! You both throw Rock";
            break;
        case 12:
            div.textContent = "You lose! Paper beats Rock";
            break;
        case 13:
            playerScore = playerScore + 1;
            div.textContent = "You win! Rock beats Scissor";
            break;
        case 21:
            playerScore = playerScore + 1;
            div.textContent = "You win! Paper beats Rock";
            break;
        case 22:
            div.textContent = "Tie! You both throw paper";
            break;
        case 23:
            computerScore = computerScore + 1;
            div.textContent = "You lose! Scissor beats paper";
            break;
        case 31:
            computerScore = computerScore + 1;
            div.textContent = "You lose! Rock beats Scissor";
            break;
        case 32:
            playerScore = playerScore + 1;
            div.textContent = "You win! Scissor beats paper";
            break;
        case 33:
            div.textContent = "Tie! You both throw scissor";
    }
    checkWinner();
}

function checkWinner(){
    if (computerScore === 5 || playerScore === 5){
        if (computerScore === playerScore){
            result.textContent = 'Result: Tie!';
        }
        if (computerScore > playerScore){
            result.textContent = 'Result: Computer win.';
        }
        if (computerScore < playerScore){
            result.textContent = 'Result: You win!';
        }
    }
}



