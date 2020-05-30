
var ticTacToe = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

var PLAYERS = {
    player1: 'X',
    player2: 'O'
}
var win=false;
var  currentPlayer = PLAYERS.player1;
function markTheBox(element, row, col) {
    if(!win){
   ticTacToe[row][col] = currentPlayer;
    element.innerHTML = currentPlayer;
    
    if (isCurrentPlayerWinner()) {
        updateTheBanner()
        win=true;
        disableclick()
    }
    else if(full()){
        updateTheBanner1()
        disableclick()
        win=true;
    }

    if ( currentPlayer === PLAYERS.player1) {
        currentPlayer = PLAYERS.player2
    } else {
        currentPlayer = PLAYERS.player1
    }
}
}

function updateTheBanner() {
    document.getElementById("winnerBanner").innerHTML = currentPlayer + ' Wins!'
}

function isCurrentPlayerWinner() {
    return ((ticTacToe[0][0] === currentPlayer && ticTacToe[0][1] === currentPlayer && ticTacToe[0][2] === currentPlayer) ||
    (ticTacToe[1][0] === currentPlayer && ticTacToe[1][1] === currentPlayer && ticTacToe[1][2] === currentPlayer) ||
    (ticTacToe[2][0] === currentPlayer && ticTacToe[2][1] === currentPlayer && ticTacToe[2][2] === currentPlayer) ||
    (ticTacToe[0][0] === currentPlayer && ticTacToe[1][0] === currentPlayer && ticTacToe[2][0] === currentPlayer) ||
    (ticTacToe[0][1] === currentPlayer && ticTacToe[1][1] === currentPlayer && ticTacToe[2][1] === currentPlayer) ||
    (ticTacToe[0][2] === currentPlayer && ticTacToe[1][2] === currentPlayer && ticTacToe[2][2] === currentPlayer) ||
    (ticTacToe[0][0] === currentPlayer && ticTacToe[1][1] === currentPlayer && ticTacToe[2][2] === currentPlayer) ||
    (ticTacToe[0][2] === currentPlayer && ticTacToe[1][1] === currentPlayer && ticTacToe[2][0] === currentPlayer))
}

function reset() {
    win=false;
    var numbers=document.querySelectorAll('td');
    numbers.forEach(myFunction)

function myFunction(item) {
    item.innerHTML = '';
}
    document.getElementById("winnerBanner").innerHTML = '';
    ticTacToe = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = PLAYERS.player1;
}
function updateTheBanner1() {
    document.getElementById("winnerBanner").innerHTML = 'No One  Wins! PlayAgain ';
}
function full(){
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
          if(ticTacToe[i][j]==PLAYERS.player1||ticTacToe[i][j]==PLAYERS.player2){
              continue;
          }
          else{
              return false;
          }
        }  
    }
    return true;
}
function disableclick(){
    var numbers=document.querySelectorAll('td');
    numbers.forEach(myFunction)

function myFunction(item) {
   item.addEventListener("click", function (evt) { evt.preventDefault(); },false);
    
}
}