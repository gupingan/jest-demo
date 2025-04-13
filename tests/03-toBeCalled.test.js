const caculateTotal = require('../src/03-toBeCalled')

test('test function is called', () => {
  const fn = jest.fn((item) => {
    return item.price
  })

  caculateTotal(
    [
      {
        price: 12,
      },
      {
        price: 14,
      },
    ],
    fn
  )

  expect(fn).toBeCalled()
  expect(fn).toHaveBeenCalled()
})

test('test function is not called', () => {
  const fn = jest.fn((item) => {
    return item.price
  })

  caculateTotal({}, fn)

  expect(fn).not.toBeCalled()
  expect(fn).not.toHaveBeenCalled()
})
