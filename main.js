// Function to play the game
const playGame = (userChoice) => {
    const computerChoice = Math.random();
    console.log(computerChoice);
    let choice;
  
    if (computerChoice < 0.34) {
      choice = "rock";
    } else if (computerChoice <= 0.67) {
      choice = "paper";
    } else {
      choice = "scissors";
    }
  
    // Determine the winner
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return "The game is a tie!";
      }
  
      if (userChoice === "rock") {
        if (computerChoice === "scissors") {
          return "You win!";
        } else {
          return "You lose. Try again.";
        }
      }
  
      if (userChoice === "paper") {
        if (computerChoice === "rock") {
          return "You win!";
        } else {
          return "You lose. Try again.";
        }
      }
  
      if (userChoice === "scissors") {
        if (computerChoice === "paper") {
          return "You win!";
        } else {
          return "You lose. Try again.";
        }
      }
    };
  
    // Display the result
    const result = determineWinner(userChoice, choice);
    document.getElementById("result").innerHTML = `You chose ${userChoice}, the computer chose ${choice}. ${result}`;
  };
  
  // Event listeners for buttons
  document.getElementById("rock").addEventListener("click", () => {
    playGame("rock");
  });
  
  document.getElementById("paper").addEventListener("click", () => {
    playGame("paper");
  });
  
  document.getElementById("scissors").addEventListener("click", () => {
    playGame("scissors");
  });
  