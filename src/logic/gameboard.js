import { Ship } from "./ship.js"

export class Gameboard {
    constructor() {
        this.board = [];
        if (this.board.length == 0) {
            this.init();
        }
    }

    init() {
        for (let i = 0; i < 10; i++) {
            this.board.push([])
            for (let j = 0; j < 10; j++) {
                this.board[i].push(null)
            }
        }
    }

    ships() {
        let ships = []
        for (let i = 0; i < this.board.length; i++) {
            ships.push(this.board[i].filter((el) => el != null && el != "hit"))
        }
        return ships.filter((el) => el.length > 0)
    }

    getBoard() {
        return this.board;
    }

    boardAt(pos) {
        let [x, y] = pos;
        return this.board[x][y]
    }

    getShip(name) {
        let ships = this.ships()
        for (let i = 0; i < ships.length; i++) {
            return ships[i].find((ship) => ship.name == name);
        }
    }

    placeShip(ship, pos, direction) {
        let [x, y] = pos; 
        if (this.validPos([x, y])) {
            this.board[x][y] = ship
            if (direction == "vertical") {
                for (let i = 1; i < ship.length; i++) {
                    this.board[x][y + i] = ship
                }
            } else if (direction == "horizontal") {
                for (let i = 1; i < ship.length; i++) {
                    this.board[x + i][y] = ship;
                }
            }
        }
        return ship;
    }

    validPos(pos) {
        let [x, y] = pos;
        if (this.board[x][y] == null && ((x <= 10 && x >= 0) && (y <= 10 && y >= 0))) {
            return true;
        }
        return false;
    }

    receiveAttack(pos) {
        let [x, y] = pos
        if ((x <= 10 && x >= 0) && (y <= 10 && y >= 0))  {
            if (typeof(this.board[x][y]) == "object") {
                this.board[x][y].hit();
                this.board[x][y].isSunk()
            } else {
                this.board[x][y] = "hit";
                this.missed(pos);
            } 
        }
    }

    missed(pos) {
        let missed = []
        missed.push(pos)
        return missed;
    }

    allSunk() {
       return this.ships().every((ship) => ship.sunk == true) 
    }
}

