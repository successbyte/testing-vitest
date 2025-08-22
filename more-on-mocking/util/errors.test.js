// errors.test.js
import { expect, it, describe } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError", () => {
  it("should create an instance with correct properties", () => {
    const statusCode = 404;
    const message = "Not Found";
    const data = { resource: "user" };

    const err = new HttpError(statusCode, message, data);

    expect(err).toBeInstanceOf(HttpError);
    expect(err.statusCode).toBe(statusCode);
    expect(err.message).toBe(message);
    expect(err.data).toEqual(data);
  });

  it("can be thrown and caught as HttpError", () => {
    const statusCode = 500;
    const message = "Server Error";
    const data = { retry: true };
    const err = new HttpError(statusCode, message, data);

    expect(() => {
      throw err;
    }).toThrowError(HttpError);

    try {
      throw err;
    } catch (caught) {
      expect(caught).toBeInstanceOf(HttpError);
      expect(caught.statusCode).toBe(statusCode);
      expect(caught.message).toBe(message);
      expect(caught.data).toEqual(data);
    }
  });

  it("should contain undefined as data if no data is passed", () => {
    const statusCode = 404;
    const message = "Not Found";
    const data = { resource: "user" };

    const err = new HttpError(statusCode, message);

    expect(err).toBeInstanceOf(HttpError);
    expect(err.statusCode).toBe(statusCode);
    expect(err.message).toBe(message);
    expect(err.data).toBeUndefined();
  });
});

describe("ValidationError", () => {
  it("should create an instance with correct message", () => {
    const message = "Invalid input";
    const err = new ValidationError(message);

    expect(err).toBeInstanceOf(ValidationError);
    expect(err.message).toBe(message);
  });

  it("can be thrown and caught as ValidationError", () => {
    const message = "Missing field";
    const err = new ValidationError(message);

    expect(() => {
      throw err;
    }).toThrowError(ValidationError);

    try {
      throw err;
    } catch (caught) {
      expect(caught).toBeInstanceOf(ValidationError);
      expect(caught.message).toBe(message);
    }
  });
});
