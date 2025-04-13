const forEvery = require('../src/04-toBeCalledTimes')

test('use forEvery handle every element', () => {
  const newArr = []
  const fn = jest.fn((el) => {
    newArr.push(el)
  })

  forEvery([1, 2, 3, 4, 5], fn)
  // toHaveBeenCalledTimes 别名
  expect(fn).toBeCalledTimes(5)
  expect(fn).not.toBeCalledTimes(6)
})