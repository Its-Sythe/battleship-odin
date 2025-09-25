import { Gameboard } from "../logic/gameboard.js";
import { Ship } from "../logic/ship.js";

describe("Test Gameboard", () => {
  const newBoard = new Gameboard();
  const ship = new Ship("TT", 2);

  test("Place ship method", () => {
    newBoard.placeShip(ship, [3, 4], "v");
    expect(newBoard.getBoard()[3][4].ship.name).toBe("TT");
  });

  test("Receive attack method", () => {
    newBoard.receiveAttack([3, 4]);
    expect(newBoard.getBoard()[3][4].ship.hits).toBe(1);
  });

  test("All sunk method", () => {
    newBoard.receiveAttack([3, 5]);
    expect(newBoard.allSunk()).toBe(true);
  });
});
