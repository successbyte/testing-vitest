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

it("should return NAN if at at least one invalid number provided", () => {
  const inputs = ["string", 5];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should retuen a correct sum if an array of numeric string value is provided", () => {
  const inputs = ["4", 3, "3"];

  const result = add(inputs);

  const expectedResult = inputs.reduce(
    (prevValue, curValue) => prevValue + +curValue,
    0
  );

  expect(result).toBe(expectedResult);
});

it("should return 0 if an empty array is passed", () => {
  const input = [];

  const result = add(input);

  expect(result).toBe(0);
});

it("should thow a error if no value is passed", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it("should throw an error if multiple args passed instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow();
});
