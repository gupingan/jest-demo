const books = require('../src/23-toContainEqual')

test('test toContainEqual', () => {
  // 深度比较
  expect(books).toContainEqual({
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  })

  // 错误值
  expect(books).not.toContainEqual({
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  })
  // 缺字段
  expect(books).not.toContainEqual({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  })
  // 多字段
  expect(books).not.toContainEqual({
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 2025,
  })
})
