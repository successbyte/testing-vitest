import { describe, expect, it } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should transform a string number to number", () => {
    const input = "5";

    const response = transformToNumber(input);

    // first way
    // const expectedResponse = Number(input);
    // expect(response).toBe(expectedResponse);

    // second way
    expect(response).toBeTypeOf("number");
  });

  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it("throws error (NAN) if input is not string or a number", () => {
    const input = [4, "5"];
    const input2 = "string";

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });

  it("should thows error for invalid input", () => {
    const invalidInput = ["", "3"];

    const cleanFn = () => cleanNumbers(invalidInput);

    expect(cleanFn).toThrow();
  });
});
