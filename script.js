function getComputerChoice() {
    let comp = Math.random();

    if (comp < 0.34) {
        comp = "Rock";    
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "Paper";
    } else {
        comp = "Scissor";
    }
}