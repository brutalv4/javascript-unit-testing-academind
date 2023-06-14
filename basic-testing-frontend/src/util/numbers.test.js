import { expect, it } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string number to a number of type number', function () {
  // Arrange
  const input = '42';

  // Act
  const result = transformToNumber(input);

  // Assert
  expect(result).toBeTypeOf('number');
});

it('should yield NaN for non-transformable value', function () {
  // Arrange
  const input = 'invalid';

  // Act
  const result = transformToNumber(input);

  // Assert
  expect(result).toBeNaN();
});

