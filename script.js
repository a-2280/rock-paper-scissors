//Get a random computer choice
function getComputerChoice() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = Math.floor(Math.random() * rps.length);
    return rps[computerChoice];
};

//Play a round of Rock Paper Scissors
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors') {
        return 'Not an option';
    }
    
    if (playerSelection === computerSelection) {
        if ( playerScore === computerScore) {
            return `Tie.    Player: ${playerScore}  Computer: ${computerScore}`;
        } else if (playerScore > computerScore){
            return `You win!    Player: ${playerScore}  Computer: ${computerScore}`;
        } else {
            return `You lose.    Player: ${playerScore}  Computer: ${computerScore}`;
        }
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        if ( playerScore === computerScore) {
            return `Tie.    Player: ${playerScore}  Computer: ${computerScore}`;
        } else if (playerScore > computerScore){
            return `You win!    Player: ${playerScore}  Computer: ${computerScore}`;
        } else {
            return `You lose.    Player: ${playerScore}  Computer: ${computerScore}`;
        }
    } else {
        computerScore++;
        if ( playerScore === computerScore) {
            return `Tie.    Player: ${playerScore}  Computer: ${computerScore}`;
        } else if (playerScore > computerScore){
            return `You win!    Player: ${playerScore}  Computer: ${computerScore}`;
        } else {
            return `You lose.    Player: ${playerScore}  Computer: ${computerScore}`;
        }
    }
};

//Plays 5 round of Rock Paper Scissors
function playGame() {
    for (let i = 0; i < 5; i++) {
        const fiveTimes = playRound(prompt(), getComputerChoice());
        console.log(fiveTimes);
        if (i === 4) {
            return fiveTimes;
        }
    }
};

console.log(playGame());