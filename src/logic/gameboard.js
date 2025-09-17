import { Ship } from './ship.js'
export class Gameboard {
    constructor() {
        this.board = []
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

    placeShip(ship, x, y) {
        let direction = ship.placement;
        let length = ship.length;
        if (this.isValidPos) {
            let pos = this.board[x][y]
            pos = ship;
            this.ships.push(pos)
            if (direction.toLowerCase() == "vertical") {
                for (let i = 1; i < length; i++) {
                    this.board[x][y + i] = ship;
                    this.ships.push(this.board[x][y + i])
                }
            }
            if (direction.toLowerCase() == "horizontal") {
                for (let i = 1; i < length; i++) {
                    this.board[x + i][y] = ship; 
                    this.ships.push(this.board[x + i][y])
                }
            } 
        }
    }

    isValidPos(x, y) {
        if (this.board[x][y] == null && ((x > 10 && y > 10) && (x < 0 && y < 0))) {
            return true;
        }
        return false;
    }

    receiveAttack(x, y) { 
        let missedAtk = []
        if (this.board[x][y] != null && this.board[x][y] != "hit") {
            let ship = this.board[x][y]    
            ship.hit()
            ship.isSunk()
        }
        if (this.board[x][y] == null) {
            this.board[x][y] = "hit"
            missedAtk.push(this.board[x][y])
        }
    }

    allSunk() {
      return this.ships.every((ship) => ship.sunk == true)
    }
}
