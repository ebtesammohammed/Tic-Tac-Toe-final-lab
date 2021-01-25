let cells = document.querySelectorAll(".row > div");
let activePlayer = "X";
let turnCounter = 0;
let gameOver = false;
let winningMsg = document.getElementById("data-winning-message-text");
let restart = document.getElementById("restartButton");
let nonActivePlayer = "O";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}
restart.addEventListener("click", function () {
  window.location.reload();
});

function cellClicked() {
  if (!gameOver) {
    if (event.target.textContent === "") {
      turnCounter++;
      event.target.textContent = activePlayer;
      togglePlayer();
      checkWin();
    }
  }
}
function togglePlayer() {
  if (activePlayer === "X") {
    activePlayer = "O";
    nonActivePlayer = "X";
  } else {
    activePlayer = "X";
    nonActivePlayer = "O";
  }
}

function checkWin() {
  if (
    cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent &&
    cells[0].textContent === cells[2].textContent &&
    cells[0].textContent !== ""
  ) {
    return (winningMsg.innerText = nonActivePlayer + " won!");
  } else if (turnCounter === 9) {
    return (winningMsg.innerText = "It's a draw");
  } else if (
    cells[3].textContent === cells[4].textContent &&
    cells[4].textContent === cells[5].textContent &&
    cells[3].textContent === cells[5].textContent &&
    cells[3].textContent !== ""
  ) {
    return (winningMsg.innerText = nonActivePlayer + " won!");
  } else if (turnCounter === 9) {
    return (winningMsg.innerText = "It's a draw");
  } else if (
    cells[6].textContent === cells[7].textContent &&
    cells[7].textContent === cells[8].textContent &&
    cells[6].textContent === cells[8].textContent &&
    cells[6].textContent !== ""
  ) {
    return (winningMsg.innerText = nonActivePlayer + " won!");
  } else if (turnCounter === 9) {
    return (winningMsg.innerText = "It's a draw");
  } else if (
    cells[0].textContent === cells[3].textContent &&
    cells[3].textContent === cells[6].textContent &&
    cells[0].textContent === cells[6].textContent &&
    cells[0].textContent !== ""
  ) {
    return (winningMsg.innerText = nonActivePlayer + " won!");
  } else if (turnCounter === 9) {
    return (winningMsg.innerText = "It's a draw");
  } else if (
    cells[1].textContent === cells[4].textContent &&
    cells[4].textContent === cells[7].textContent &&
    cells[1].textContent === cells[7].textContent &&
    cells[1].textContent !== ""
  ) {
    return (winningMsg.innerText = nonActivePlayer + " won!");
  } else if (turnCounter === 9) {
    return (winningMsg.innerText = "It's a draw");
  } else if (
    cells[2].textContent === cells[5].textContent &&
    cells[5].textContent === cells[8].textContent &&
    cells[2].textContent === cells[8].textContent &&
    cells[2].textContent !== ""
  ) {
    return (winningMsg.innerText = nonActivePlayer + " won!");
  } else if (turnCounter === 9) {
    return (winningMsg.innerText = "It's a draw");
  } else if (
    cells[0].textContent === cells[4].textContent &&
    cells[4].textContent === cells[8].textContent &&
    cells[4].textContent === cells[8].textContent &&
    cells[0].textContent !== ""
  ) {
    return winningMsg.innerText = nonActivePlayer + " won!";  
} else if (turnCounter === 9) {
 return winningMsg.innerText = "It's a draw";
} else if (
  cells[2].textContent === cells[4].textContent &&
  cells[4].textContent === cells[6].textContent &&
  cells[2].textContent === cells[6].textContent &&
  cells[2].textContent !== ""
) {
  return winningMsg.innerText = nonActivePlayer + " won!";  
} else if (turnCounter === 9) {
 return winningMsg.innerText = "It's a draw";
  }
}
function reset() {
    var buttonId;
    for (var i = 1; i < squares.length; i++) {
      buttonId = "sqr" + i;
      document.getElementById(buttonId).value = "";
    }
  
    squares = [];
    gameOver = false;
  }

    
