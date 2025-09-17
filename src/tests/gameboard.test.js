import { Gameboard } from '../logic/gameboard.js'
import { Ship } from '../logic/ship.js'

describe("Test gameboard methods", () => {
    let newBoard = new Gameboard()

    newBoard.placeShip(new Ship("Ship1", 2, 0, "vertical"), 3, 4)

    test("All ships sunk method", () => {
        newBoard.receiveAttack(3, 6)
        newBoard.receiveAttack(3, 5)
        newBoard.receiveAttack(3, 4)
        expect(newBoard.getBoard()[3][6]).toBe(3)
    })
})
