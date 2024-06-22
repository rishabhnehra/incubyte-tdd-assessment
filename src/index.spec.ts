import { describe, expect, it } from "vitest";
import { stringCalculator } from "./string-calculator";

describe("String calculator", () => {
  it("should return zero on empty input string", () => {
    const result = stringCalculator("");

    expect(result).toBe(0);
  });

  it("should return the same value as input if no other number", () => {
    const result = stringCalculator("1");

    expect(result).toBe(1);
  });

  it("should return sum of all the numbers in input string (comma separated)", () => {
    const result = stringCalculator("1,5");

    expect(result).toBe(6);
  });
});
