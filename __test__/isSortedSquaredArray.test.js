const sortedSquaredArray = require("../sortedSquaredArray");

describe("sortedSquaredArray", () => {
  it("should return an empty array when given an empty input array", () => {
    const result = sortedSquaredArray([]);
    expect(result).toEqual([]);
  });

  it("should return a sorted array of squared values", () => {
    const inputArray = [-4, -2, 0, 2, 4];
    const expectedOutput = [0, 4, 4, 16, 16];
    const result = sortedSquaredArray(inputArray);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle an input array with negative values", () => {
    const inputArray = [-3, -2, -1, 0, 1, 2, 3];
    const expectedOutput = [0, 1, 1, 4, 4, 9, 9];
    const result = sortedSquaredArray(inputArray);
    expect(result).toEqual(expectedOutput);
  });

  it("should maintain the original order for duplicate squared values", () => {
    const inputArray = [-3, -2, -2, -1, 0, 0, 1, 2, 3];
    const expectedOutput = [0, 0, 1, 1, 4, 4, 4, 9, 9];
    const result = sortedSquaredArray(inputArray);
    expect(result).toEqual(expectedOutput);
  });
});
