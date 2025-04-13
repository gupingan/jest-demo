const testReturnFn = require('../src/07-toReturn')

test('test function return value', () => {
  const fn = jest.fn(() => true)  // undefined 也属于有返回值，没有任何异常错误抛出时，认为有返回值
  testReturnFn(fn)
  // toHaveReturned 别名
  expect(fn).toReturn()
})

test('test function no return value', () => {
  // 模拟抛出 Error
  const fn = jest.fn(() => {
    throw new Error('no return value')
  })
  // toHaveReturned 别名
  testReturnFn(fn)
  expect(fn).not.toReturn()
})