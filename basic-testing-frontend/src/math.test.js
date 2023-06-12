import { expect, it, should } from 'vitest';
import { add } from './math';

it('should summarize all numbers values in an array', () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((sum, num) => sum + num, 0);
  expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
  // Arrange
  const numbers = ['invalid', 1];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string value is provided', () => {
  // Arrange
  const numbers = ['1', '2'];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((sum, num) => sum + +num, 0);
  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
  // Arrange
  const numbers = [];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(0);
});

it('should throw an error if no value is provided', () => {
  // Act
  const resultFn = () => add();

  // Assert
  expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
  // Act
  const resultFn = () => add(1, 2);

  // Assert
  expect(resultFn).toThrow(/is not iterable/);
});
