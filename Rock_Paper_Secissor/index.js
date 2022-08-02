const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player, computer, result;
choiceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${resultOfGame()}`;
  });
});
function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSOR";
      break;
  }
}
function resultOfGame() {
  if (player == computer) return "Draw";
  else if (player == "ROCK")
    return computer == "PAPER" ? "You Lose!" : "You Win!";
  else if (player == "SCISSOR")
    return computer == "ROCK" ? "You Lose!" : "You Win!";
  else return computer == "SCISSOR" ? "You Lose!" : "You Win!";
}
