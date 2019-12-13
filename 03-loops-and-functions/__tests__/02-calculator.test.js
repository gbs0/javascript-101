const { sum, multiply, subtraction, division } = require('../02-calculator')
describe('Test sum ➕ function', () => {
  // Applies only to tests in this describe block
  test('Adding 1 + 1 equals 2', () => {
  	expect(sum(1, 1)).toBe(2);
	})
});

describe('Test Multiply ✖️ function', () => {
  // Applies only to tests in this describe block
  test('Multiplying 1 * 1 equals 1', () => {
  	expect(multiply(1, 1)).toBe(1);
	})
});

describe('Test Subtraction ➖ function', () => {
  // Applies only to tests in this describe block
  test('Subtracting 1 - 1 equals 0', () => {
  	expect(subtraction(1, 1)).toBe(0);
	})
});

describe('Test Divsion ➗ function', () => {
  // Applies only to tests in this describe block
  test('Dividing 1 / 1 equals 1', () => {
  	expect(division(1, 1)).toBe(1);
	})
});

