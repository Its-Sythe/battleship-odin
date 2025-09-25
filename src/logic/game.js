import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { Ship } from "./ship.js";

export class Game {
    constructor() {
        this.p1 = new Player()
        this.p2 = new Player()
    }
    init() {
        this.placeShips(this.p1)
        this.placeShips(this.p2)
    }

    placeShips(player) {
       if (player == this.p1) {
            player = this.p1.board();
            const ships = [
                new Ship("TT", 2), new Ship("O_O", 3),
                new Ship(":)", 5), new Ship(";)", 1)
            ];
            player.placeShip(ships[0], [2, 2], "v")
            player.placeShip(ships[2], [6, 3], "v")
            player.placeShip(ships[1], [3, 6], "h")
            player.placeShip(ships[3], [5, 5], "h")
        }
        if (player == this.p2) {
            const ships = [
                new Ship("-_-", 3), new Ship("O_o", 2),
                new Ship("^_^", 1), new Ship("'_'", 5)
            ];
            player.placeShip(ships[0], [3, 3], "v")
            player.placeShip(ships[2], [5, 1], "v")
            player.placeShip(ships[1], [1, 8], "h")
            player.placeShip(ships[3], [3, 2], "h")
        }
    }
    
    getBoards(player) {
        
    }
}
