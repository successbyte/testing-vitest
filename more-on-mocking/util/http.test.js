import { expect, it, vi } from "vitest";
import { sendDataRequest } from "./http";

const testResponseData = { testkey: "testData" };
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string");
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});
vi.stubGlobal("fetch", testFetch);

it("should return any availabe response data", () => {
  const testData = { key: "testData" };
  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it("should convert data to json before sending the request", async () => {
  const testData = { key: "testData" };

  let errorMessage;
  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe("Not a string");
});
