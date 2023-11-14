const humanScore = document.querySelector('.yourPoints.yourScore'); // for player score container

const compScore = document.querySelector('.computerPoints.computerScore'); //for computer score container

const result = document.querySelector('.resultsContainer');  // result container

function computerPlay() {
  let gameMoves = ['Rock', 'Paper', 'Scissors'];
  return gameMoves[Math.floor(Math.random() * gameMoves.length)]
}

let yourScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
  computerSelection = computerSelection.toLowerCase()
  let drawPrompt = "Draw! Try again!";
  if (yourScore < 5 && computerScore < 5) {
      if (playerSelection === computerSelection) {
          result.textContent = drawPrompt;
      } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
          result.textContent = "You Win! Rock beats Scissors";
          humanScore.textContent = (yourScore += 1);
      } else if (playerSelection === 'rock' && computerSelection === 'paper') {
          result.textContent = "You Lose! Paper beats Rock";
          compScore.textContent = (computerScore += 1);
      } else if (playerSelection === 'paper' && computerSelection === 'rock') {
          result.textContent = "You Win! Paper beats Rock";
          humanScore.textContent = (yourScore += 1);
      } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
          result.textContent = "You Lose! Scissors beats Paper";
          compScore.textContent = (computerScore += 1);
      } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
          result.textContent = "You Win! Scissors beats Paper";
          humanScore.textContent = (yourScore += 1);
      } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
          result.textContent = "You Lose! Rock beats Scissors";
          compScore.textContent = (computerScore += 1);
  }}
  if (yourScore == 5) {
      result.textContent = "Congratulations! You beat the computer! You are the smartest human alive!"
      button.style.visibility = 'visible';
  } else if (computerScore == 5) {
      result.textContent = "The way you played it shows shit is worth more than you."
      button.style.visibility = 'visible';
  }
}

//on clicking Therock
const rock = document.querySelector('.Therock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
})

//on clicking thepaper
const paper = document.querySelector('.thepaper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
})

//on clicking thescissor
const scissors = document.querySelector('.thescissor');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
})

// on clicking again
const button = document.querySelector('.again');
button.addEventListener('click', () => {
    yourScore = 0;
    humanScore.textContent = yourScore;
    computerScore = 0;
    compScore.textContent = computerScore;
    result.textContent = "";
    button.style.visibility = 'hidden';
})