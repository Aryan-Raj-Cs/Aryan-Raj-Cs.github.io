
var matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

var PLAYERS = {
    player1: 'X',
    player2: 'O'
}

var cP = PLAYERS.player1;
function markTheBox(element, row, col) {
    matrix[row][col] = currentPlayer;
    element.innerHTML = currentPlayer;
    if (isCurrentPlayerWinner()) {
        updateTheBanner()
    }
    if (cP === PLAYERS.player1) {
        cP = PLAYERS.player2
    } else {
        cP = PLAYERS.player1
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
    console.log("Hi")
    document.querySelectorAll('td').innerHTML = '';
    document.getElementById("winnerBanner").innerHTML = '';
    ticTacToe = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = PLAYERS.player1;
}