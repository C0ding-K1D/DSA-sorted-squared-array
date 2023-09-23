const sortedSquaredArray = require("../sortedSquaredArray");

describe("isSortedSquaredArray", () => {
  it("Should return a new Array with the sqrt values of the original Array in ascending order", () => {
    const array = [1, 2, 3, 5, 6, 8, 9];

    expect(sortedSquaredArray(array)).toBe([1, 4, 9, 25, 36, 64, 81]);
  });

  it("Should return a new Array with the sqrt values of the original Array in ascending order", () => {
    const array = [1];

    expect(sortedSquaredArray(array)).toBe([1]);
  });

  it("Should return a new Array with the sqrt values of the original Array in ascending order", () => {
    const array = [1, 2];

    expect(sortedSquaredArray(array)).toBe([1, 4]);
  });

  it("Should return a new Array with the sqrt values of the original Array in ascending order", () => {
    const array = [1, 2, 3, 4, 5];

    expect(sortedSquaredArray(array)).toBe([1, 4, 9, 16, 25]);
  });

  it("Should return a new Array with the sqrt values of the original Array in ascending order", () => {
    const array = [0];

    expect(sortedSquaredArray(array)).toBe([0]);
  });
});
