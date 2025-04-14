const { getErrors, getState } = require('../src/15-toBeFalsy')

test('test value is falsy', () => {
  expect(getState()).toBeFalsy()
})

test("test value isn't falsy", () => {
  expect(getErrors()).not.toBeFalsy()
})
