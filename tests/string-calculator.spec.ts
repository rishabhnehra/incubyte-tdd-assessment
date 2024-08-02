import { describe, expect, it } from "vitest";
import { stringCalculator } from "../src/string-calculator";

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

  it("should return sum of all the numbers in input string with comma and space symbol", () => {
    const result = stringCalculator("1\n2,3");

    expect(result).toBe(6);
  });

  it("should return sum of all the numbers in input string with custom delimiter", () => {
    const inputs = ["//;\n1;2", "//-\n1-2", "//👋\n1👋2"];

    inputs.map((input) => expect(stringCalculator(input)).toBe(3));
  });

  it("should throw error if negative numbers are encountered", () => {
    const inputs = ["1, -8", "1, -2, -3, -4"];

    expect(() => stringCalculator(inputs[0])).toThrowError(
      "negative numbers not allowed -8"
    );
    expect(() => stringCalculator(inputs[1])).toThrowError(
      "negative numbers not allowed -2,-3,-4"
    );
  });
});
