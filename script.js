function getComputerChoice() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = Math.floor(Math.random() * rps.length);
    return rps[computerChoice];
};

console.log(getComputerChoice());