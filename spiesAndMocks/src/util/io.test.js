import { it, expect } from "vitest";
import writeData from "./io";

it("should execute the writeFile function", () => {
  const testData = "test";
  const testFilename = "test.txt";

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
