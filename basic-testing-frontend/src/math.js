export function add(numbers, num2) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
