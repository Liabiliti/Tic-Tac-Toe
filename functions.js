//Board Class
//Keep state of the board
class Board {
    #board;
    constructor(size = 3) {
        this.#board = new Array();
        for (let row = 0; row < size; row++) {
            this.#board.push(new Array);
            for (let col = 0; col < size; col++) {
                this.#board[row][col] = ".";
            }
        }
    }
    getBoard() { return this.#board; }

    setBoard(row, col, piece) {
        this.#board[row][col] = piece;
    }

    clearBoard() {
        for (let row = 0; row < this.#board.length; row++) {
            //this.board.push(new Array);
            for (let col = 0; col < this.#board[row].length; col++) {
                this.#board[row][col] = ".";
            }
        }
    }
}

//Player Class
class Player {
    constructor(name, piece) {
        this.name = name;
        this.piece = piece;
    }
}

//Game Flow Class

class GameFlow {

    #turn = 0;

    constructor() {
    }

    currentTurn(players) {
        this.#turn++;
        return players[this.#turn % 2];
    }

    horizontalWin(board) {
        for (let row = 0; row < board.length; row++) {
            let pieces = new Set(board[row]);

            if (pieces.size == 1 && !pieces.has(".")) {
                return true;
            }
        }
        return false;
    }

    verticalWin(board) {
        for (let col = 0; col < board.length; col++) {
            let pieces = new Set();
            for (let row = 0; row < board[col].length; row++) {
                pieces.add(board[row][col]);
            }
            if (pieces.size == 1 && !pieces.has(".")) { return true; }
        }
        return false;
    }

    diagonalWin(board) {
        let pieces = new Set();
        for (let row = 0; row < board.length; row++) {
            pieces.add(board[row][row]);
        }
        if (pieces.size == 1 && !pieces.has(".")) { return true; }
        else {
            pieces = new Set();
            for (let col = 0; col < board.length; col++) {
                pieces.add(board[(board.length - col) - 1][col]);
            }
            if (pieces.size == 1 && !pieces.has(".")) { return true; }
        }
        return false;
    }
    //Check for a win
    //Reset game
}

let gamef = new GameFlow();
let board = new Board();

board.setBoard(2, 0, "X");
board.setBoard(1, 1, "X");
board.setBoard(0, 0, "X");

console.log(board.getBoard());


console.log(gamef.diagonalWin(board.getBoard()));

//DOM Class
//Render board
//Event listener for square selection


/* Steps to play 
1. Choose player and piece
2. Start game
3. Place piece by selecting grid spot
4. Winner or draw
5. Step 1.
*/