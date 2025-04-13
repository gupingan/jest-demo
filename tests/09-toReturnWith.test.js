const testReturnFn = require('../src/09-toReturnWith')

test('test function return with', () => {
  const fn = jest.fn(() => 'hello world')

  testReturnFn(fn)

  // toHaveReturnedWith 别名
  expect(fn).toReturnWith('hello world')
  expect(fn).not.toReturnWith('hi world')
})
