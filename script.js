//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

submitBtn.addEventListener("click", () => {
    player1 = document.getElementById("player-1").value || "Player 1";
    player2 = document.getElementById("player-2").value || "Player 2";

    startScreen.classList.add("hide");
    gameScreen.classList.remove("hide");

    message.textContent = `${player1}, you're up`;
});

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

function handleClick(e) {
    const id = e.target.id - 1;

    if (board[id] !== "" || !gameActive) return;

    board[id] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWinner()) {
        const winnerName = currentPlayer === "X" ? player1 : player2;
        message.textContent = `${winnerName} congratulations you won!`;
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.textContent =
        currentPlayer === "X"
            ? `${player1}, you're up`
            : `${player2}, you're up`;
}

function checkWinner() {
    const wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    return wins.some(combo => {
        const [a,b,c] = combo;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}