import { Ship } from '../logic/ship.js'

describe("Ship methods tests", () => {
    const newShip = new Ship("Ship1", 3, 0)

    test("Test ship hit method", () => {
        newShip.hit() 
        expect(newShip.hits).toBe(1)
    })


    test("Test ship isSunk method", () => {
        newShip.hit()
        newShip.hit()
        expect(newShip.isSunk()).toBe(true)
    })
})
