const { users, books, cities } = require('../src/11-toHaveLength')

test('test users lenght', () => {
  expect(users).toHaveLength(7)
})

test('test books lenght', () => {
  expect(books).not.toHaveLength(3)
})

test('test cities lenght', () => {
  expect(cities).toHaveLength(0)
  expect(cities).not.toHaveLength(1)
})
