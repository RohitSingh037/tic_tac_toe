let cells = document.querySelectorAll(".cell");
cells = Array.from(cells);

let currentPlayer = "X";

let winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  winningCombo.forEach(function (combination) {
    let check = combination.every(
      (index) => cells[index].innerText.trim() == currentPlayer
    );

    if (check) {
      highlightCells(combination);
    }
  });
}

function highlightCells(combination) {
  combination.forEach(function (index) {
    cells[index].classList.add("highlight");
  });
}

cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    if (cell.innerText.trim() != "") return;
    cell.innerText = currentPlayer;
    checkWinner();
    if (currentPlayer == "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  });
});