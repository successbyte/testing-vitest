import { expect, it } from "vitest";
import { add } from "./math";

it("it should summerize all numbers in an array", () => {
  // Arrange
  const numbers = [3, 3, 4];

  // Act
  const result = add(numbers);

  //   Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});
