const testReturnFn = require('../src/10-nthReturnedWith')

test('test function return with', () => {
  let i = 0
  const fn = jest.fn(() => i++)

  testReturnFn(fn)
  testReturnFn(fn)
  testReturnFn(fn)

  // 第 n 个参数必须是从 1 开始的正整数
  // toHaveNthReturnedWith 别名
  expect(fn).nthReturnedWith(1, 0)
  expect(fn).nthReturnedWith(3, 2)
  expect(fn).not.nthReturnedWith(3, 3)
  // lastReturnedWith 等价写法
  // toHaveLastReturnedWith 别名
  expect(fn).lastReturnedWith(2)
  expect(fn).not.lastReturnedWith(3)
})
