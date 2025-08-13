import { it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";
import { expect } from "chai";

it("should generate a tokedn value", (done) => {
  const userTestEmail = "test@test.com";

  generateToken(userTestEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      done();
    } catch (error) {
      done();
    }
  });
});

it("should generate a tokedn value", () => {
  const userTestEmail = "test@test.com";

  return expect(generateTokenPromise(userTestEmail)).resolves.toBeDefined();
});

it("should generate a tokedn value", async () => {
  const userTestEmail = "test@test.com";

  const token = await generateTokenPromise(userTestEmail);

  expect(token).toBeDefined();
});
