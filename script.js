let playerSelection = capitalize(prompt("Choose Rock, Paper, or Scissor? "));
let compSelection = getComputerChoice();

function getComputerChoice() {
    let comp = Math.random();

    if (comp < 0.34) {
        comp = "Rock";    
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "Paper";
    } else {
        comp = "Scissor";
    }

    return comp;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function playRound(playerSelection, compSelection) {
    if (playerSelection == compSelection) {
        return "That's a tie";
    } else if (playerSelection == "Rock") {
        if (compSelection == "Scissor") {
            return "OK, you win...";
        } else {
            return "You lose haha!";
        }
    } else if (playerSelection == "Paper") {
        if (compSelection == "Rock") {
            return "OK, you win...";
        } else {
            return "You lose haha!";
        }
    } else if (playerSelection == "Scissor") {
        if (compSelection == "Paper") {
            return "OK, you win...";
        } else {
            return "You lose haha!";
        }
    }
}