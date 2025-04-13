const testReturnFn = require('../src/08-toReturnTimes')

test('test function return times', () => {
  const fn = jest.fn(() => true)

  const realCount = 3
  for (let _ = 0; _ < realCount; _++) {
    testReturnFn(fn)
  }
  // toHaveReturnedTimes 别名
  expect(fn).toReturnTimes(realCount)
  expect(fn).not.toReturnTimes(realCount + 1)
  expect(fn).not.toReturnTimes(realCount - 1)
})
