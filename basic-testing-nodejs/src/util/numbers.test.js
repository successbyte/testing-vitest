import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string number to number", () => {
  const input = "5";

  const response = transformToNumber(input);

  // first way
  // const expectedResponse = Number(input);
  // expect(response).toBe(expectedResponse);

  // second way
  expect(response).toBeTypeOf("number");
});

it("throws error (NAN) if input is not string or a number", () => {
  const input = [4, "5"];
  const input2 = "string";

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
