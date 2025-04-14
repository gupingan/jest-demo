test('grapefruits are a fruit', () => {
  expect('grapefruits').toMatch('fruit')
  expect('grapeFruits').toMatch(/fruit/i)
  expect('grapefruit\ns').toMatch(/fruit./s)
  expect('grapeFruits').not.toMatch(/fruit/)
})
