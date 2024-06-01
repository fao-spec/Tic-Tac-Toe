let currentPlayer = "X";
let cells = Array.from(document.querySelectorAll(".cell"));
let resultScreen = document.getElementById("resultScreen");
let resultMessage = document.getElementById("resultMessage");

function handleClick(index) {
  if (!cells[index].textContent && !checkWin() && !isDraw()) {
    cells[index].textContent = currentPlayer;
    if (checkWin()) {
      resultMessage.textContent = `${currentPlayer} wins!`;
      resultScreen.style.display = "flex";
    } else if (isDraw()) {
      resultMessage.textContent = "It's a draw!";
      resultScreen.style.display = "flex";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  return winningCombos.some(combo => {
    const [a, b, c] = combo;
    return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
  });
}

function isDraw() {
  return cells.every(cell => cell.textContent);
}

function reset() {
  cells.forEach(cell => {
    cell.textContent = "";
  });
  resultScreen.style.display = "none";
  currentPlayer = "X";
}
