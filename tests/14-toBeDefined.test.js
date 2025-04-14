const add = require('../src/14-toBeDefined')

let sub
const mul = undefined

test('test variable is defined', () => {
  expect(add).toBeDefined()
})

test('test variable is not defined', () => {
  expect(sub).not.toBeDefined()
  expect(mul).not.toBeDefined()
})