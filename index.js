let computerScore = 0;
let playerScore = 0;


let patternRock = /rock/i;
let patternPaper = /paper/i;
let patternScissors = /scissors/i;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "uh-oh";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock-Paper-Scissors Go!");;
  while (!(patternRock.test(choice) || patternPaper.test(choice) || patternScissors.test(choice))) {
    choice = prompt("Rock-Paper-Scissors Go!");
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (patternRock.test(humanChoice) && computerChoice === "scissors") {
    console.log("human wins");
    playerScore++;
  } else if (computerChoice === "rock" && patternScissors.test(humanChoice)) {
    console.log("computer wins");
    computerScore++;
  } else if (patternPaper.test(humanChoice) && computerChoice === "rock") {
    console.log("human wins");
    playerScore++;
  } else if (computerChoice === "paper" && patternRock.test(humanChoice)) {
    console.log("computer wins");
    playerScore++;
  } else if (patternScissors.test(humanChoice) && computerChoice === "paper") {
    console.log("human wins");
    playerScore++;
  } else if (computerChoice === "scissors" && patternPaper.test(humanChoice)) {
    console.log("computer wins");
    computerScore++;
  } else {
    console.log("H:" + humanChoice + " does not beat " + "C:" + computerChoice);
  }
}
while (computerScore < 2 || playerScore < 2) {
  console.log("H:" + playerScore + " C:" + computerScore);
  playRound(getHumanChoice(), getComputerChoice());
}