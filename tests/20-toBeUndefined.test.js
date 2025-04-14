const getBooks = require('../src/20-toBeUndefined')

test('test toBeUndefined', () => {
  const books = getBooks()

  expect(books[books.length]).toBeUndefined()
  expect(books[1]).not.toBeUndefined()
  expect(books[3]).not.toBeUndefined()  // null 不是 undefined
})