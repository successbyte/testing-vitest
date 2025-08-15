import { vi } from "vitest";

export const promises = {
  writeFile: vi.fn((papth, data) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }),
};
