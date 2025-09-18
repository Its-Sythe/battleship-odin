import { Ship } from './ship.js'
export class Gameboard {
    constructor() {
        this.board = []
        this.missed = []
        this.ships = []
        if (this.board.length == 0) this.initBoard()
    }

    initBoard() {
        for (let i = 0; i < 10; i++) {
            this.board.push([])
            for (let j = 0; j < 10; j++) {
                this.board[i].push(null)
            }
        }
    }

    getBoard() {
        return this.board;
    }

    getAllShips() {
        return this.ships;
    }

    getMissed() {
        return this.missed;
    }

    placeShip(ship, x, y) {
        let direction = ship.placement;
        let length = ship.length;
        if (this.isValidPos(x, y)) {
            this.board[x][y] = ship;
            this.ships.push({ship, "pos": [x, y]})
            if (direction.toLowerCase() == "vertical") {
                for (let i = 1; i < length; i++) {
                    this.board[x][y + i] = ship;
                    this.ships.push({ship, "pos": [x, y + i]})
                }
            }
            if (direction.toLowerCase() == "horizontal") {
                for (let i = 1; i < length; i++) {
                    this.board[x + i][y] = ship; 
                    this.ships.push({ship, "pos": [x + i, y]})
                }
            } 
        } else {
            return this.isValidPos(x, y)
        }
    }

    isValidPos(x, y) {
        if (this.board[x][y] == null && ((x < 10 && x > 0) && (y < 10 && y > 0))) {
            return true;
        } 
        return false;
    }

    receiveAttack(x, y) { 
        if (this.board[x][y] != null && this.board[x][y] != "hit") {
            let ship = this.board[x][y]    
            ship.hit()
            return ship.isSunk()
        }
        if (this.board[x][y] == null) {
            this.board[x][y] = "hit"
            this.missed.push([x, y])
        }
    }

    allSunk() {
      return this.ships.every((ship) => ship.sunk == true)
    }
}
