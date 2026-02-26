const submitBtn=document.getElementById("submit");
const gameScreen=document.getElementById("game-screen");
const startScreen=document.getElementById("start-screen");
const message=document.querySelector(".message");
const cells=document.querySelectorAll(".cell");

let player1="";
let player2="";
let currentPlayer="x";
let board=["","","","","","","","",""];
let gameActive=true;

submitBtn.onclick=()=>{
player1=document.getElementById("player1").value||"Player1";
player2=document.getElementById("player2").value||"Player2";

startScreen.style.display="none";
gameScreen.style.visibility="visible";   // ⭐ IMPORTANT

message.textContent=`${player1}, you're up`;
};

cells.forEach(cell=>{
cell.onclick=(e)=>{
const i=e.target.id-1;

if(board[i]!==""||!gameActive)return;

board[i]=currentPlayer;
e.target.textContent=currentPlayer;

if(checkWin()){
const winner=currentPlayer==="x"?player1:player2;
message.textContent=`${winner} congratulations you won!`;
gameActive=false;
return;
}

currentPlayer=currentPlayer==="x"?"o":"x";
message.textContent=currentPlayer==="x"
?`${player1}, you're up`
:`${player2}, you're up`;
};
});

function checkWin(){
const w=[
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
];
return w.some(([a,b,c])=>board[a]&&board[a]===board[b]&&board[a]===board[c]);
}