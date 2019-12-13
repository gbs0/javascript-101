const { sum, multiply, subtraction, division } = require('../02-calculator')

test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2)
})
test('Multiplying 1 * 1 equals 1', () => {
  expect(multiply(1, 1)).toBe(1)
})
test('Subtracting 1 - 1 equals 0', () => {
  expect(subtraction(1, 1)).toBe(0)
})
test('Dividing 1 / 1 equals 1', () => {
  expect(division(1, 1)).toBe(1)
})