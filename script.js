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

let word = prompt('Rock, paper, or scissors?');
let playerSelection = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
let computerSelection = getComputerChoice();

function play() {
    if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        alert('Tie!');
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        alert('You lose! Paper beats rock.')
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        alert('You Win! Rock beats scissors.')
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        alert('You win! Paper beats rock.')
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        alert('Tie!')
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        alert('You lose! Scissors beats paper.')
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        alert('You lose! Rock beats scissors.')
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        alert('You win! Scissors beats paper.')
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        alert('Tie!')
    } else {
        alert('Not an option!')
    }
}
console.log(play());