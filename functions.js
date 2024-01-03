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

    getBoard(){return this.#board};
    printBoard() {
        let boardString = "";
        for (let row = 0; row < this.#board.length; row++) {
            boardString += this.#board[row].toString() + "\n";
            
        }
        return boardString;
    }

    possibleMove(row, col) {
        if (row < this.#board.length && col < this.#board.length) {
            if (row >= 0 && col >= 0) {
                if (this.#board[row][col] == ".") {
                    return true;
                }
            }
        }
        alert("Not in range");
        return false;
    }

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
        this.wins = 0;
    }
}

//Game Flow Class

class GameFlow {

    #turn = 1;

    changeTurn(players) {
        this.#turn++;
        return players[this.#turn % 2].piece;
    }

    checkWin(board) {
        if (this.#horizontalWin(board) ||
            this.#verticalWin(board) ||
            this.#diagonalWin(board)) {

            return true;
        }
        return false;
    }

    #horizontalWin(board) {
        for (let row = 0; row < board.length; row++) {
            let pieces = new Set(board[row]);

            if (pieces.size == 1 && !pieces.has(".")) {
                return true;
            }
        }
        return false;
    }

    #verticalWin(board) {
        for (let col = 0; col < board.length; col++) {
            let pieces = new Set();
            for (let row = 0; row < board[col].length; row++) {
                pieces.add(board[row][col]);
            }
            if (pieces.size == 1 && !pieces.has(".")) { return true; }
        }
        return false;
    }

    #diagonalWin(board) {
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

let board = new Board();
let game = new GameFlow();
let player1 = new Player("Nick", "X");
let player2 = new Player("Clarissa", "O");

let players = [player1, player2];



while(!game.checkWin(board.getBoard())) {
    let row = prompt("Row: ");
    let col = prompt("Col: ");
    if (board.possibleMove(Number(row), Number(col))) {
        board.setBoard(Number(row), Number(col), game.changeTurn(players));
        alert(board.printBoard());
    }
} 


//DOM Class
//Render board
//Event listener for square selection

// class DOMManipulation {
// }


/* Steps to play 
1. Choose player and piece
2. Start game
3. Place piece by selecting grid spot
4. Winner or draw
5. Step 1.
*/

