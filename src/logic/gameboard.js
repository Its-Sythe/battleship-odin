import { Ship } from "./ship.js";

export class Gameboard {
  constructor() {
    this.board = [];
    this.misses = [];
    this.fleet = [];
    if (this.board.length == 0) this.init();
  }

  init() {
    for (let i = 0; i < 10; i++) {
      this.board.push([]);
      for (let j = 0; j < 10; j++) {
        this.board[i].push(null);
      }
    }
    return this.board;
  }

  placeShip(ship, pos, dir) {
    let [x, y] = pos;
    if (!this.validPos(pos)) return false;

    if (dir == "v") {
      if (y + ship.length > 10) return false;

      if (!this.occupied(pos)) {
        this.board[x][y] = { ship, pos };
        this.fleet.push(this.board[x][y]);
        for (let i = 1; i <= ship.length - 1; i++) {
          this.board[x][y + i] = { ship, pos: [x, y + i] };
          this.fleet.push(this.board[x][y + i]);
        }
      }
    }
    if (dir == "h") {
      if (x + ship.length > 10) return false;

      if (!this.occupied(pos)) {
        this.board[x][y] = { ship, pos: [x, y] };
        this.fleet.push(this.board[x][y]);
        for (let i = 0; i <= ship.length - 1; i++) {
          this.board[x + i][y] = { ship, pos: [x + i, y] };
          this.fleet.push(this.board[x + i][y]);
        }
      }
    }
  }

  receiveAttack(pos) {
    let [x, y] = pos;
    if (this.occupied(pos)) {
      let ship = this.board[x][y].ship;
      ship.hit();
      ship.isSunk();
    } else {
      this.board[x][y] = "hit";
      this.misses.push([x, y]);
    }

    return this.board[x][y];
  }

  allSunk() {
    return this.fleet.every((fl) => fl.ship.sunk == true);
  }

  getBoard() {
    return this.board;
  }

  getMisses() {
    return this.misses;
  }

  getFleet() {
    return this.fleet;
  }

  validPos(pos) {
    let [x, y] = pos;
    if (x >= 0 && x <= 10 && y >= 0 && y <= 10) return true;
  }

  occupied(pos) {
    let [x, y] = pos;
    if (this.board[x][y] != null && this.board[x][y] != "hit") {
      return true;
    }
    return false;
  }
}
