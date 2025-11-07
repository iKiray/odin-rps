const ranNum = Math.random() * 10;
const fixNum = ranNum.toFixed(0);
const parseNum = parseFloat(fixNum);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    if (parseNum <= 3) {
        return "rock";
    } else if (parseNum > 3 && parseNum <= 6) {
        return "paper";
    } else {
        return "scissor";
    }
}

console.log("computer choice: " + getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Enter: rock, paper, or scissor");
    let fixedChoice = choice.toLowerCase();

    if (fixedChoice === "rock") {
        return "rock";
    } else if (fixedChoice === "paper") {
        return "paper";
    } else {
        return "scissor";
    }
}

console.log("your choice: " + getHumanChoice());
/*
function playRound(humanChoice, computerChoice) {
    
}
*/