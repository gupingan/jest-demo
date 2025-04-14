const {throwError, normal} = require('../src/28-toThrow')

test('test throw error', () => {
  expect(throwError).toThrow()
  expect(normal).not.toThrow()
})