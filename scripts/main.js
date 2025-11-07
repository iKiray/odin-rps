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

let choice = prompt("Enter: rock, paper, or scisscor")
if (choice == "rock") {
    console.log("your choice is rock");
} else if (choice == "paper") {
    console.log("your choice is paper");
} else if (choice == "scissor") {
    console.log("your choice is scissor");
} else {
    console.log("your choice is invalid");
}

console.log("computer choice: " + getComputerChoice());