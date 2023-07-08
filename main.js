const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 0;
  }
  if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    return 1;
  }
  return 2;
};

const userChoice = (uChoice) => {
  const choices = ["rock", "paper", "scissor"];
  const cChoice = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById("addUserChoice").src = `static/${uChoice}.jpg`;
  document.getElementById("addComputerChoice").src = `static/${cChoice}.jpg`;

  const result = determineWinner(uChoice, cChoice);
  const showResult = document.getElementById("showResult");
  const scoreElement = result === 1 ? document.getElementById("uScore") : document.getElementById("cScore");
  const score = parseInt(scoreElement.innerText);

  if (result === 0) {
    showResult.innerText = "The game is a tie!";
  } else {
    showResult.innerText = result === 1 ? "You win!" : "You lose. Try again.";
    scoreElement.innerText = score + 1;
  }
};
