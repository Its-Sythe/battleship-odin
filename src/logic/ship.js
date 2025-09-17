export class Ship {
    constructor(name, length, hits, placement, sunk = false) {
        this.name = name;
        this.length = length;
        this.sunk = sunk;
        this.hits = hits;
        this.placement = placement // Can be either vertical or horizontal.
    }

    hit() {
        if (this.length != 0) this.hits++;
    }

    isSunk() {
        if (this.length <= this.hits) {
            this.sunk = true;
            return this.sunk
        }
    } 
}
