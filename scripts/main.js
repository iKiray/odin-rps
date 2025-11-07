function getComputerChoice() {
    let ranNum = Math.random() * 10;
    let fixNum = ranNum.toFixed(0);
    let parseNum = parseFloat(fixNum);

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

if (humanScore == computerScore) {
    console.log("You and the computer drew the game");
} else if (humanScore > computerScore) {
    console.log("You won the game!");
} else {
    console.log("You lost the game!")
}