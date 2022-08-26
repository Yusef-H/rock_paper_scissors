/**
 * @param {number} start 
 * @param {number} end 
 * @returns {number} random number integer in [start,end].
 */
function getRandomIndex(start, end){
    return Math.floor(Math.random()*(end - start + 1)) + start;
}

/**
 * @returns Randomized computer choice. (rock, paper or scissors). 
 */
function getComputerChoice(){
    const gameChoices = ['Rock', 'Paper', 'Scissors'];
    return gameChoices[getRandomIndex(0, 2)];
}

/**
 * @param {String} str 
 * @returns same string with first character being uppercase.
 */
function upperFirstChar(str){
    if(str.length == 0)
        return str;
    return str.slice(0,1).toUpperCase() + str.slice(1);
}

/**
 * Plays one round of rock paper scissors game.
 * @param {String} playerSelection 
 * @param {String} computerSelection 
 * @returns {String} Result of round
 */
function playRound(playerSelection, computerSelection){
    // Case-insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "That's a tie!";
    }
    else if((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissors' && computerSelection == 'paper')){
                return "You win! " + upperFirstChar(playerSelection) + " Beats " 
                                        + upperFirstChar(computerSelection);
            }
    else{
        return "You Lose! " + upperFirstChar(computerSelection) +
                    " Beats " + upperFirstChar(playerSelection);
    }
}

/**
 * @returns nodelist of all option buttons.
 */
function getOptionButtons(){
    return document.querySelectorAll('.opt');
}

/**
 * Display the round result on the board.
 */
function displayOnTitle(result){
    const titleBoard = document.querySelector('.title');
    const titleText = document.querySelector('h1');
    titleText.textContent = result;
    titleBoard.appendChild(titleText);
}

/**
 * @returns true if player has won and false otherwise.
 */
function winCheck(result){
    return result.slice(4,8) === 'win!';
}

/** 
 * @returns true if its a tie and false otherwise.
 */
function tieCheck(result){
    return result.slice(9,12) === 'tie';
}

/**
 *  Update scoreboard after every round.
 */
function updateScoreBoard(playerScore, computerScore){
    const playerScoreBoard = document.querySelector('.player-score');
    const computerScoreBoard = document.querySelector('.computer-score');
    playerScoreBoard.textContent = "" + playerScore;
    computerScoreBoard.textContent = "" + computerScore;
}

var flag = false; /* Flag to know if the game has ended. */
var playerScore = 0;
var computerScore = 0;
function handleRestart(){
    const restartButton = document.querySelector('.restart');
    restartButton.addEventListener('click', ()=>{
        updateScoreBoard(0, 0); /* Restarts score board to 0,0. */
        displayOnTitle("Welcome To the Game!");
        flag = false;
        playerScore = 0;
        computerScore = 0;
    })
}

function announceWinner(playerScore, computerScore){
    if(playerScore == 5){
        displayOnTitle("Nice Job! You have won the Game against the Computer!  Press Restart to try another Game!")
    }
    else{
        displayOnTitle("Unlucky! The Computer has won the game against You! Press Restart to try again!")
    }
}

/**
 * Plays a rock paper scissors game between a player and 
 * the computer and prints the results.
 */
function game(){
    const buttons = getOptionButtons();
    handleRestart();
    
    buttons.forEach((button)=>{
        button.addEventListener('click', (e)=>{
            if(!flag){
                const playerSelection = e.target.textContent;
                let result = playRound(playerSelection,getComputerChoice());
                displayOnTitle(result);
                if(winCheck(result))
                    playerScore++;
                else if(!tieCheck(result))
                    computerScore++;
                updateScoreBoard(playerScore, computerScore);
                if(playerScore == 5 || computerScore == 5){
                    flag = true; // Can't play anymore unless restarted.
                    announceWinner(playerScore, computerScore);
                    playerScore = 0;
                    computerScore = 0;
                }     
            }

        })
    })
}

game();

