// validation.test.js
import { expect, it, describe } from "vitest";
import { validateNotEmpty } from "./validation";
import { ValidationError } from "./errors";

describe("validateNotEmpty", () => {
  it("does not throw for non-empty strings", () => {
    expect(() => validateNotEmpty("hello", "Required")).not.toThrow();
    expect(() => validateNotEmpty("  world  ", "Required")).not.toThrow();
  });

  it("throws ValidationError when text is empty", () => {
    const msg = "Cannot be empty";
    expect(() => validateNotEmpty("", msg)).toThrowError(ValidationError);
    expect(() => validateNotEmpty("   ", msg)).toThrowError(ValidationError);

    // Optionally, assert that the message is included
    expect(() => validateNotEmpty("", msg)).toThrowError(msg);
  });

  it("throws the exact provided message", () => {
    const customMsg = "Your message here";
    try {
      validateNotEmpty("   ", customMsg);
    } catch (err) {
      // Validate instance and message
      expect(err).toBeInstanceOf(ValidationError);
      expect(err.message).toBe(customMsg);
    }
  });
});
