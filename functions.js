const Board = (function () {
    gameBoard = [[".", ".", "."],
    [".", ".", "."],
    [".", ".", "."]];

    moveQueue = [];

    move = 1;

    const getClearBoard = function () {
        gameBoard = [[".", ".", "."],
        [".", ".", "."],
        [".", ".", "."]];
    }

    const getBoard = function () {
        console.log(gameBoard);
    }

    const getPiece = function () {
        return (move % 2 == 1) ? "X" : "O";
    }

    const horizontalWin = function (gamePiece) {
        for (let x = 0; x < gameBoard.length; x++) {
            let count = 0;
            for (let y = 0; y < gameBoard[x].length; y++) {
                if (gameBoard[x][y] === gamePiece) {
                    count++;
                }
            }
            if (count === 3) {
                console.log("Win");
                return true;
            }
        }
        return false;
    }

    const verticalWin = function (gamePiece) {
        for (let y = 0; y < gameBoard.length; y++) {
            let count = 0;
            for (let x = 0; x < gameBoard[y].length; x++) {
                if (gameBoard[x][y] === gamePiece) {
                    count++;
                }
            }
            if (count === 3) {
                console.log("Win");
                return true;
            }
        }
    }

    const diagonalWin = function (gamePiece) {
        let y = 2, countL = 0, countR = 0;
        for (let x = 0; x < gameBoard.length; x++) {
            if (gameBoard[x][x] === gamePiece) {
                countL++;
            }
            if (gameBoard[x][y] === gamePiece) {
                countR++;
            }
            y--;
        }
        if (countL === 3 || countR === 3) {
            console.log("Win");
            return true;
        }
        return false;
    }

    const setMove = function (x, y) {
        if (move === 10) {
            alert("Draw!");
            getClearBoard();
            return false;
        }
        let gamePiece = getPiece();
        if (gameBoard[x][y] === ".") {
            gameBoard[x][y] = gamePiece;
            moveQueue.push(gamePiece);
            if(diagonalWin(gamePiece) || horizontalWin(gamePiece) || verticalWin(gamePiece))
            {
                alert("Game over!");
                getClearBoard();
                return;
            }
            move++;
            return;
        }
        alert("Not a valid move");
    }
    return { getBoard, setMove, horizontalWin, verticalWin, diagonalWin };

})();

const Player = function (playerName) {
    const name = playerName;
    return { name };
}

const player1 = Player("X");



Board.setMove(0, 0);

Board.setMove(0, 1);
Board.setMove(0, 2);
Board.setMove(1, 0);

Board.setMove(1, 1);
Board.setMove(1, 2);
Board.setMove(2, 0);

Board.setMove(2, 1);
// Board.setMove(2, 2);

Board.getBoard();

