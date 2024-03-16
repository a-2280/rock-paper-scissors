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
            alert('Tie');
        };
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        alert('You win this round!');
    } else {
        computerScore++;
        alert('The computer wins this round.')
    }
    
    updateScoreboard();

    if (playerScore === 5) {
        setTimeout(function() {
            alert('You win!');
            location.reload();
        }, 100);
    } else if (computerScore === 5) {
        setTimeout(function() {
            alert('Computer wins.');
            location.reload();
        }, 100);
    };
};

//Function to update the scoreboard
function updateScoreboard() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

//Plays 5 round of Rock Paper Scissors
// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const fiveTimes = playRound(prompt(), getComputerChoice());
//         console.log(fiveTimes);
//         if (i === 4) {
//             return fiveTimes;
//         }
//     }
// };

//Event listeners for options
document.getElementById("rock").addEventListener("click", function() {
    let playerSelection = 'Rock';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    return result;
});

document.getElementById("paper").addEventListener("click", function() {
    let playerSelection = 'Paper';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    return result;
    
});document.getElementById("scissors").addEventListener("click", function() {
    let playerSelection = 'Scissors';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    return result;
});

