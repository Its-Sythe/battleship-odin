export class Ship {
    constructor(name, length, hits) {
        this.name = name;
        this.hits = hits;
        this.length = length;
        this.sunk = false;
    }

    hit() {
        if (!this.sunk) {
            this.hits++;
            this.isSunk();
        } 
        return this.hits;
    }

    isSunk() {
        if (this.hits >= this.length) {
            this.sunk = true;
            return true;
        }
        return false;
    }
}
