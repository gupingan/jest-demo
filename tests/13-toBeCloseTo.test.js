const add = require('../src/13-toBeCloseTo')

test('test compare floating point numbers', () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3)
  // Math(expect - actual) < precision
  // 0.30000000000000004 - 0.3 < 0.005  true
  // 默认比较精度是 2，也就是 5e-3
  // 精度级别设置为 n，则精度为 5e**(-n-1)
  expect(add(0.1, 0.2)).not.toBeCloseTo(0.3, 16)  // 超出允许精度
  // 0.30000000000000004 - 0.3 < 5e-17  false
})
