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
/*
function getHumanChoice() {
  let choice = prompt("Rock-Paper-Scissors Go!");;
  while (!(patternRock.test(choice) || patternPaper.test(choice) || patternScissors.test(choice))) {
    choice = prompt("Rock-Paper-Scissors Go!");
  }
  return choice;
}
*/

const BUTTON_ROCK = document.querySelector('#rock');
const BUTTON_PAPER = document.querySelector('#paper');
const BUTTON_SCISSORS = document.querySelector('#scissors');
const P_LOG = document.querySelector('#log');

BUTTON_ROCK.addEventListener('click', () => {
  console.log('here')
  playRound('rock', getComputerChoice());
});

BUTTON_PAPER.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

BUTTON_SCISSORS.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
})

function playRound(humanChoice, computerChoice) {
  let skip = false;
  if (patternRock.test(humanChoice) && computerChoice === "scissors") {
    playerScore++;
  } else if (computerChoice === "rock" && patternScissors.test(humanChoice)) {
    computerScore++;
  } else if (patternPaper.test(humanChoice) && computerChoice === "rock") {
    playerScore++;
  } else if (computerChoice === "paper" && patternRock.test(humanChoice)) {
    computerScore++;
  } else if (patternScissors.test(humanChoice) && computerChoice === "paper") {
    playerScore++;
  } else if (computerChoice === "scissors" && patternPaper.test(humanChoice)) {
    computerScore++;
  } else {
    P_LOG.textContent = "H:" + humanChoice + " does not beat " + "C:" + computerChoice;
    skip = true;
  }
  if (!skip) {
    skip = false;
    P_LOG.textContent = "H:" + playerScore + " C:" + computerScore;
  }
  
  if (playerScore >= 5) {
    P_LOG.textContent = "We have a winner! Player wins " + playerScore + "-" + computerScore;
    BUTTON_RESET.style.display = "block";
    BUTTON_PAPER.disabled = true;
    BUTTON_ROCK.disabled = true;
    BUTTON_SCISSORS.disabled = true;
  } else if (computerScore >= 5) {
    P_LOG.textContent = "We have a winner! Computer wins " + computerScore + "-" + playerScore;
    BUTTON_RESET.style.display = "block";
    BUTTON_PAPER.disabled = true;
    BUTTON_ROCK.disabled = true;
    BUTTON_SCISSORS.disabled = true;
  }

}

const BUTTON_RESET = document.querySelector('#reset');

BUTTON_RESET.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  P_LOG.textContent = "";
  BUTTON_RESET.style.display = "none";
  BUTTON_PAPER.disabled = false;
  BUTTON_ROCK.disabled = false;
  BUTTON_SCISSORS.disabled = false;
})

if (playerScore >= 5) {
  P_LOG.textContent = "We have a winner! Player wins " + playerScore + "-" + computerScore;
  BUTTON_RESET.style.display = "block";
} else if (computerScore >= 5) {
  P_LOG.textContent = "We have a winner! Computer wins " + computerScore + "-" + playerScore;
  BUTTON_RESET.style.display = "block";
}

