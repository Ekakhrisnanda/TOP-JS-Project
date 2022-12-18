let playerWin = 0;
let compWin = 0;
let gameWinner = '';

function getComputerChoice() {
    const comp = ['rock', 'paper', 'scissor'];

    let random = comp[Math.floor(Math.random() * comp.length)];
    
    return random;
}

function playRound(playerSelection, compSelection) {
    if ((playerSelection == "rock" && compSelection == "scissor") ||
        (playerSelection == "scissor" && compSelection == "paper") ||
        (playerSelection == "paper" && compSelection == "rock")) {
        playerWin++;    
        return "You win, " + playerSelection + " beats " + compSelection;
    } else if (playerSelection == compSelection) {
        return "It's a tie, you both chose " + playerSelection;
    } else {
        compWin++;
        return "You lose, " + compSelection + " beats " + playerSelection;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const computerSelection = getComputerChoice();
        const playerSelection = button.className;
        battleText.textContent = playRound(playerSelection, computerSelection);
        computerScore.textContent = 'Computer Score = ' + compWin;
        playerScore.textContent = 'Player Score = ' + playerWin;
        winner();
    });
});

const container = document.querySelector('#buttons-container');
const scoreDiv = document.createElement('div');
container.appendChild(scoreDiv);

const computerScore = document.createElement('p');
computerScore.style.color = 'orange';
computerScore.textContent = 'Computer Score = ' + compWin;
scoreDiv.appendChild(computerScore);

const playerScore = document.createElement('p');
playerScore.style.color = 'blue';
playerScore.textContent = 'Player Score = ' + playerWin;
scoreDiv.appendChild(playerScore);

const battleText = document.createElement('p');
battleText.style.color = 'black';
scoreDiv.appendChild(battleText);

const gameWinnerText = document.createElement('p');
gameWinnerText.textContent = gameWinner;
scoreDiv.appendChild(gameWinnerText);

function getPlayerWins() {
    gameWinner = 'YOU ARE THE CHAMPION';
    gameWinnerText.style.color = 'green'
    gameWinnerText.textContent = gameWinner;
}

function getCompWins() {
    gameWinner = 'COMPUTER BEATS YOUR ASS';
    gameWinnerText.style.color = 'red'
    gameWinnerText.textContent = gameWinner;
}

const disableButton = function() {
    const disabledButton = document.querySelectorAll('button');
    disabledButton.forEach((button) => {
        button.disabled = true;
    })
}

const playAgainButton = function() {
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again?'
    scoreDiv.appendChild(playAgainButton);

    playAgainButton.addEventListener('click', () => {
        location.reload();
    })
}

const winner = function() {
    if (playerWin == 5) {
        getPlayerWins();
        disableButton();
        playAgainButton();
    } else if (compWin == 5) {
        getCompWins();
        disableButton();
        playAgainButton();
    }
}