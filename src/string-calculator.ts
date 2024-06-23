export function stringCalculator(input: string) {
  if (input.length === 0) return 0;

  if (input.substring(0, 2) === "//") {
    const inputWithoutSlash = input.substring(2);
    const [delimiter, filteredInput] = inputWithoutSlash.split("\n");

    return add(filteredInput, delimiter);
  }

  return add(input);
}

function isNegative(num: number) {
  return num < 0;
}

function add(nums: string, delimiter?: string) {
  let inputArray = nums.split(new RegExp(`\n|,`));

  if (delimiter) {
    inputArray = nums.split(new RegExp(`\n|,|${delimiter}`));
  }

  if (inputArray.length === 1) {
    return Number(inputArray[0]);
  }

  return inputArray.reduce((prevValue, current) => {
    if (isNegative(Number(current))) {
      const negativeNumbers = inputArray
        .map((num) => num.trim())
        .filter((num) => isNegative(Number(num)));

      console.log(negativeNumbers);
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(",")}`
      );
    }
    return prevValue + Number(current);
  }, 0);
}
