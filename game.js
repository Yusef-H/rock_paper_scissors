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
 */
function playRound(playerSelection, computerSelection){
    // Case-insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        console.log("That's a tie!")
    }
    else if((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissors' && computerSelection == 'paper')){
                console.log("You win! " + upperFirstChar(playerSelection) + " Beats " 
                                        + upperFirstChar(computerSelection));
            }
    else{
        console.log("You Lose! " + upperFirstChar(computerSelection) +
                    " Beats " + upperFirstChar(playerSelection));
    }
}

