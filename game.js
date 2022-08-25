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


function handleDom(){
    const buttons = document.querySelectorAll('.opt');
    buttons.forEach((button)=>{
        button.addEventListener('click', (e)=>{
            console.log(e.target.textContent);
        })
    })
}


function getOptionButtons(){
    return document.querySelectorAll('.opt');
}



function displayResult(result){
    const titleBoard = document.querySelector('.title');
    const titleText = document.querySelector('h1');
    titleText.textContent = result;
    titleBoard.appendChild(titleText);
}


/**
 * Plays a rock paper scissors game between a player and 
 * the computer and prints the results.
 */
function game(){

    var playerScore = 0;
    var computerScore = 0;
    const buttons = getOptionButtons();
    
    buttons.forEach((button)=>{
        button.addEventListener('click', (e)=>{
            const playerSelection = e.target.textContent;
            let result = playRound(playerSelection,getComputerChoice());
            displayResult(result);
            // if(winCheck(result))
            //     playerScore++;
            // else
            //     computerScore++;
        })
    })
}

game();

