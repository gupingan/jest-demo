const getBooks = require('../src/22-toContain')

test('test array contain element', () => {
  const books = getBooks()

  // 内部使用 === 
  expect(books).toContain('Python')
  expect(books).not.toContain(undefined)
})