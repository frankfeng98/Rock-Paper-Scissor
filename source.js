function computerPlay(){
    //randomly return number between 0 and 2, respectively stands for Rock, Paper and Scissor
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    if (playerChoice === "rock"){
        if (computerSelection === 0){
            return 11; //"Tie! You both throw Rock";
        } else if (computerSelection === 1){
            return 12; //"You lose! Paper beats Rock";
        } else {
            return 13; //"You win! Rock beats Scissor";
        }
    } else if (playerChoice === "paper"){
        switch (computerSelection){
            case 0:
                return 21; //"You win! Paper beats Rock";
            case 1:
                return 22; //"Tie! You both throw paper";
            case 2:
                return 23; //"You lose! Scissor beats paper";
        }
    } else if (playerChoice === "scissor"){
        switch (computerSelection){
            case 0:
                return 31; //"You lose! Rock beats Scissor";
            case 1:
                return 32; //"You win! Scissor beats paper";
            case 2:
                return 33; //"Tie! You both throw scissor";
        }
    } else {
        console.log("Invalid entry");
        prompt("Please enter again.");
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; ++i){
        let playerSelection = prompt("Do you want to throw Rock, Paper, or Scissor?");
        let roundResult = playRound(playerSelection, computerPlay());
        switch (roundResult){
            case 11:
                console.log("Tie! You both throw Rock");
                break;
            case 12:
                ++computerScore;
                console.log("You lose! Paper beats Rock");
                break;
            case 13:
                ++playerScore;
                console.log("You win! Rock beats Scissor");
                break;
            case 21:
                ++playerScore;
                console.log("You win! Paper beats Rock");
                break;
            case 22:
                console.log("Tie! You both throw paper");
                break;
            case 23:
                ++computerScore;
                console.log("You lose! Scissor beats paper");
                break;
            case 31:
                ++computerScore;
                console.log("You lose! Rock beats Scissor");
                break;
            case 32:
                ++playerScore;
                console.log("You win! Scissor beats paper");
                break;
            case 33:
                console.log("Tie! You both throw scissor");
        }
    }
    console.log(playerScore > computerScore ? "You won!" : "Computer won.");
}

game();


