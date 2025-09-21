import { Gameboard } from "../logic/gameboard.js"
import { Ship } from "../logic/ship.js"

describe("Test gameboard", () => {
    let newBoard = new Gameboard()
    test("Placeship method", () => {
        newBoard.placeShip(new Ship("TT", 2, 0), [3, 4], "vertical");
        expect(newBoard.ships().length).toBe(1)
    })

    test("Receive attack method", () => {
        newBoard.receiveAttack([3, 4]);
        expect(newBoard.getShip("TT").name).toBe("TT")
        newBoard.receiveAttack([2, 2]);
        expect(newBoard.boardAt([2, 2])).toBe("hit")
    })

    test("All sunk method", () => {
        newBoard.receiveAttack([3, 5]);
        expect(newBoard.allSunk()).toBe(true)
    })
})
