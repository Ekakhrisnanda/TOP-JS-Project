let playerSelection = capitalize(prompt("Choose Rock, Paper, or Scissor? "));
let compSelection = getComputerChoice();
let playerScore = 0;
let compScore = 0;

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
    if ((playerSelection == "Rock" && compSelection == "Scissor") ||
        (playerSelection == "Scissor" && compSelection == "Paper") ||
        (playerSelection == "Paper" && compSelection == "Rock")) {

        playerScore++;
        return "You win, " + playerSelection + " beats " + compSelection;
    } else if (playerSelection == compSelection) {
        return "It's a tie, you both chose " + playerSelection;
    } else {
        compScore++;
        return "You lose, " + compSelection + " beats " + playerSelection;
    }
}