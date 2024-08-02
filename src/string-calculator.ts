export function stringCalculator(input: string, operation?: string) {
  if (input.length === 0) return 0;

  if (input.substring(0, 2) === "//") {
    const inputWithoutSlash = input.substring(2);
    const [delimiter, filteredInput] = inputWithoutSlash.split("\n");

    return operate(filteredInput, operation, delimiter);
  }

  return operate(input, operation);
}

function isNegative(num: number) {
  return num < 0;
}

function operate(nums: string, operation?: string, delimiter?: string) {
  let inputArray = nums.split(new RegExp(`\n|,`));

  if (delimiter) {
    inputArray = nums.split(new RegExp(`\n|,|${delimiter}`));
  }

  if (inputArray.length === 1) {
    return Number(inputArray[0]);
  }

  const initialValue = operation === "*" ? 1 : 0;

  return inputArray.reduce((prevValue, current) => {
    if (isNegative(Number(current))) {
      const negativeNumbers = inputArray
        .map((num) => num.trim())
        .filter((num) => isNegative(Number(num)));

      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(",")}`
      );
    }

    if (operation === "*") {
      return prevValue * Number(current);
    }

    return prevValue + Number(current);
  }, initialValue);
}
