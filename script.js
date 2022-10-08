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