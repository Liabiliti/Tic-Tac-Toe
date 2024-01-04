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

class RandomPlayer extends Player
{
    constructor(piece)
    {
        super("Bot", piece);
    }

    getMove(board)
    {
        while(1)
        {
            let row = Math.floor(Math.random() * board.getBoard().length - 1) + 1;
            let col = Math.floor(Math.random() * board.getBoard().length - 1) + 1;
            if(board.possibleMove(row, col))
            {
                return [row, col];
                
            }
            
        }
    }
}

//Game Flow Class

class GameFlow {

    #turn = 0;

    changeTurn() {
        this.#turn++;
        return this.#turn % 2;
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
let player2 = new RandomPlayer("O");

let players = [player1, player2];
let currentPlayer = 0;


while(!game.checkWin(board.getBoard())) {
    let row, col;
    alert(currentPlayer);
    if(!(players[currentPlayer] instanceof RandomPlayer))
    {
        row = prompt("Row: ");
        col = prompt("Col: ");
    }
    else{
        [row, col] = players[currentPlayer].getMove(board);
        
    }
    alert(row + " " + col + "\n");

    if (board.possibleMove(Number(row), Number(col))) {
        board.setBoard(Number(row), Number(col), players[currentPlayer].piece);
        currentPlayer = game.changeTurn();
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

