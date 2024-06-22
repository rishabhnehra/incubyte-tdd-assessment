export function stringCalculator(input: string) {
  if (input.length === 0) return 0;

  const inputArray = input.split(",");

  if (inputArray.length === 1) {
    return Number(inputArray[0]);
  }

  return inputArray.reduce((prevValue, current) => {
    return prevValue + Number(current);
  }, 0);
}
