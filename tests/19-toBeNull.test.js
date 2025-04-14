const getBooks = require('../src/19-toBeNull')

test('test toBeNull', () => {
  const books = getBooks()

  expect(books[3]).toBeNull()
  expect(books[1]).not.toBeNull()
  expect(books[books.length]).not.toBeNull()
})