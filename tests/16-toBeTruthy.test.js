const { getErrors, getState } = require('../src/16-toBeTruthy')

test('test value is truthy', () => {
  expect(getErrors()).toBeTruthy()
})

test("test value isn't truthy", () => {
  expect(getState()).not.toBeTruthy()
})
