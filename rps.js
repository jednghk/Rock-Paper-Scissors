const rpsArray = ['r', 'p', 's'];
let playerSelection;
let playAgain = true;

function getRandomInt(min, max) {
    //creates a random integer from min to max
    //used to simulate computer opponent
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function ComputerSelection() {
    //fetches a random choice by the computer
    return rpsArray[getRandomInt(0,3)];
}

function winChecker(playerChoice, computerChoice) {
    //checks every possible permutation of player and computer choices
    //returns result of each permutation.
    if (playerChoice === computerChoice) {
        return 'draw'
    } else if (playerChoice === 'r' && computerChoice ==='s') {
        return 'win'
    } else if (playerChoice === 'r' && computerChoice ==='p') {
        return 'lose'
    } else if (playerChoice === 'p' && computerChoice ==='r') {
        return 'win'
    } else if (playerChoice === 'p' && computerChoice ==='s') {
        return 'lose'
    } else if (playerChoice === 's' && computerChoice ==='p') {
        return 'win'
    } else if (playerChoice === 's' && computerChoice ==='r') {
        return 'lose'
    }
}

function updateScore() {
    runningScore = document.querySelector('#runningScore')
    runningScore.textContent = `${playerScore} - ${computerScore}`
}

function checkFinalWinner() {
    if (playerScore === 5) {
            runningScore = document.querySelector('#runningScore')
            runningScore.textContent = `YOU WON!!`
        } else if (computerScore === 5) {
            runningScore = document.querySelector('#runningScore')
            runningScore.textContent = `You lost...`
        }
}

function playRound(playerChoice) {
    if (playerScore === 5 || computerScore === 5) {
        return
    }
    
    let result = winChecker(playerChoice, ComputerSelection());
    if (result === 'win') {
        playerScore += 1
    } else if (result === 'lose') {
        computerScore += 1
    }
    updateScore()
    checkFinalWinner()
}

var playerScore = 0
var computerScore = 0

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => playRound('r'))

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => playRound('p'))

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => playRound('s'))

//VERSION 1
/*
while (playAgain) {    
    //after reaching 5 points, give option for player to restart the game
    //reset number of wins
    let numPlayerWins = 0;
    let numComWins = 0;
    while (true) {
        //loops until one player has accummulated 5 points
        console.log(`Player: ${numPlayerWins} - Computer: ${numComWins}`)
        
        //this section checks if win condition is met
        if (numPlayerWins === 5) {
            console.log('You have won!!')
            break
        } else if (numComWins === 5) {
            console.log('You lost...')
            break
        }

        //takes in input and evaluates outcome of match
        playerSelection = prompt("Enter 'r' (rock), 'p' (paper), or 's' (scissors)!");
        result = winChecker(playerSelection, ComputerSelection());
        if (result === 'win') {
            numPlayerWins += 1
        } else if (result === 'lose') {
            numComWins += 1
        } else {
            continue
        }
    }

    //checks if user would like to play again
    playAgain = prompt('Would you like to play again? y/n').toLowerCase();
    if (playAgain === 'y') {
        playAgain = true
    } else {
        playAgain = false
    }
}
*/

//let playerScore = 0 and computerScore = 0
//while playerScore < 5 or computerScore < 5, continue playing round
//if playerScore = 5 return you won, otherwise return you lost