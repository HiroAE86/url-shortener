import { describe, expect, test } from "bun:test";
describe("Shortener controller", () => {
  test(
    "POST /v1/shortener",
    async () => {
      const response = await fetch("http://localhost:4000/v1/shortener");
      expect(response.ok).toBe(true);
    },
    { retry: 3 },
  );
});
