function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        return 'Rock';
    } else if (randomNumber == 1) {
        return 'Paper';
    } else if (randomNumber == 2) {
        return 'Scissors';
    } else {
        return "Error";
    }
}

function playRound() {
    if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        return 'Tie!'
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'You lose! Paper beats rock.'
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'You Win! Rock beats scissors.'
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You win! Paper beats rock.'
    } else if (playerSelection == 'Paper' && coputerSelection == 'Paper') {
        return 'Tie!'
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'You lose! Scissors beats paper.'
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'You lose! Rock beats scissors.'
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'You win! Scissors beats paper.'
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        return 'Tie!'
    } else {
        return 'Not an option!'
    }
}

function winTracker() {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        tieScore++;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        computerScore++;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerScore++;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore++;
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        tieScore++;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        computerScore++;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        computerScore++;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore++;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        tieScore++;
    }

    if (playerScore > computerScore && playerScore > tieScore) {
        return 'You win!'
    } else if (computerScore > playerScore && computerScore > tieScore) {
        return 'You lose'
    } else if (tieScore > playerScore && tieScore > computerScore) {
        return 'You tied!'
    }
}

for (let i = 0; i < 5; i++) {
    playerPrompt = prompt('Rock, Paper, or Scissors?');
    playerSelection = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playRound());
  }

  console.log(winTracker());