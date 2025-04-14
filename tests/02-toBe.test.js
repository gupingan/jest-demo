const { sum, val } = require('../src/02-toBe')

// 内部使用 Object.is 比较值，比较对象的引用

test('test function sum', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(1, 2)).not.toBe(4)
})

test('test function val', () => {
  expect(val(+0)).not.toBe(-0)
  expect(val(-0)).toBe(-0)
  expect(val(NaN)).toBe(NaN)

  const obj = {}
  expect(val(obj)).toBe(obj)
  expect(val(obj)).not.toBe({})

  expect(Object.is(val(obj), obj)).toBe(true)
  expect(Object.is(val(obj), {})).toBe(false)
})
