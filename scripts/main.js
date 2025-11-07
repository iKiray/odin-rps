//random number generator 1-10 to determine rock,paper,or scissor
const ranNum = Math.random() * 10;
const fixNum = ranNum.toFixed(0);
const parseNum = parseFloat(fixNum);

function getComputerChoice() {
    if (parseNum <= 3) {
        return "rock";
    } else if (parseNum > 3 && parseNum <= 6) {
        return "paper";
    } else {
        return "scissor";
    }
}

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

let humanScore = 0;
let computerScore = 0;

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "paper") || (humanChoice == "scissor" && computerChoice == "scissor")) {
            console.log("Draw!");
        } else if ((humanChoice == "rock" && computerChoice == "scissor") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissor" && computerChoice == "paper")) {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();
console.log("your score: " + humanScore);
console.log("computer score: " + computerScore);