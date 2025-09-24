import { Gameboard } from './gameboard.js'
import { Player } from './player.js' 
import { Ship } from './ship.js'

export class Game {
    init() {
        this.p1 = new Player()
        this.p2 = new Player()
    } 
    
    placeP1Ships() {
        const p1 = this.p1.board();
        const ships = [
            new Ship("TT", 2), new Ship("O_O", 3),
            new Ship(":)", 5), new Ship(";)", 1)
        ];
        p1.placeShip(ships[0], [2, 2], "v")
        p1.placeShip(ships[2], [6, 3], "v")
        p1.placeShip(ships[1], [3, 6], "h")
        p1.placeShip(ships[3], [5, 5], "h")

        return p1.getBoard();
    }

    placeP2Ships() {
        const p2 = this.p2.board();
        const ships = [
            new Ship("-_-", 3), new Ship("O_o", 2),
            new Ship("^_^", 1), new Ship("'_'", 5)
        ];
        p1.placeShip(ships[0], [3, 3], "v")
        p1.placeShip(ships[2], [5, 1], "v")
        p1.placeShip(ships[1], [1, 8], "h")
        p1.placeShip(ships[3], [3, 2], "h")

        return p2.getBoard();
    }
}
