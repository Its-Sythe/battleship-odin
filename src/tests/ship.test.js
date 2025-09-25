import { Ship } from "../logic/ship.js";

describe("Test ship methods", () => {
  test("Test isSunk method + hits method", () => {
    let newShip = new Ship("Ship1", 2, 0);
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toBe(true);
  });
});
