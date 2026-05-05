// Get user's choice: rock, paper or scissors
const getUserChoice = (userInput) => {

  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return null;
  }
}

// Get computer's choice: rock, paper or scissors
const getComputerChoice = () => {

  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  } else {
    return null;
  }
}

// Determine the winner based on user and computer choices. If user enters 'bomb', user always wins.
const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === computerChoice) {
    return 'It\'s a tie !'
  }

  if (userChoice === 'bomb') {
    return 'User wins !';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins !'
    } else if (computerChoice === 'scissors') {
      return 'User wins !'
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins !'
    } else if (computerChoice === 'rock') {
      return 'User wins !'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins !'
    } else if (computerChoice === 'paper') {
      return 'User wins !'
    }
  }

  if (! ['rock', 'paper', 'scissors', 'bomb'].includes(userChoice) || ! ['rock', 'paper', 'scissors'].includes(computerChoice)) {
    return 'An error has occurred: at least one choice is not a match.';
  }
}


// Start program and display the results
const playGame = () => {
  
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();

  console.log(userChoice, computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();