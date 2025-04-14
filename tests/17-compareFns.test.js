const add = require('../src/17-compareFns')

// 注意：123 + 456 = 579

test('test num1 is greater than num2', () => {
  // 实际值 大于 预期值
  expect(add(123, 456)).toBeGreaterThan(570)
  // 不大于
  expect(add(123, 456)).not.toBeGreaterThan(579)
})

test('test num1 is greater than or equal to num2', () => {
  // 实际值 大于等于 预期值
  expect(add(123, 456)).toBeGreaterThanOrEqual(579)
  // 小于
  expect(add(123, 456)).not.toBeGreaterThanOrEqual(580)
})

test('test num1 is less than num2', () => {
  // 实际值 小于 预期值
  expect(add(123, 456)).toBeLessThan(590)
  // 不小于
  expect(add(123, 456)).not.toBeLessThan(579)
})

test('test num1 is less than or equal num2', () => {
  // 实际值 小于等于 预期值
  expect(add(123, 456)).toBeLessThanOrEqual(579)
  // 大于
  expect(add(123, 456)).not.toBeLessThanOrEqual(570)
})
