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
    if (choice == "rock") {
        return "rock";
    } else if (choice == "paper") {
        return "paper";
    } else {
        return "scissor";
    }
}

console.log("computer choice: " + getComputerChoice());
console.log("your choice: " + getHumanChoice());