import { describe, it, expect } from "@jest/globals";
import { sum } from "../../sum";

describe("Sum module", () => {
  it("should give 2 + 3 result 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
