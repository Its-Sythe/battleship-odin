import { Gameboard } from '../logic/gameboard.js'
import { Ship } from '../logic/ship.js'

let ship = new Ship("Ship", 3, 0, "vertical")
describe("Test gameboard", () => {
    describe("Receive Attack", () => {
        test("Receive attack method", () => {
            const newBoard = new Gameboard();
            newBoard.placeShip(ship, 3, 4)
            newBoard.receiveAttack(3, 4)
            expect(newBoard.getBoard()[3][4].hits).toBe(1)
        })
    })

    describe("Game end", () => {
        test("All sunk test", () => {
            const newBoard1 = new Gameboard()
            newBoard1.receiveAttack(3, 5)
            newBoard1.receiveAttack(3, 6)
            newBoard1.receiveAttack(3, 4)
            expect(newBoard1.allSunk()).toBe(true)
        })
    })

    describe("Overlapping ships", () => {
        test("Test same coord deployment", () => {
            const newBoard = new Gameboard()
            newBoard.placeShip(ship, 3, 4)
            newBoard.placeShip(ship, 3, 5)
            expect(newBoard.getAllShips().length).toBe(3) 
        })
    })
})
