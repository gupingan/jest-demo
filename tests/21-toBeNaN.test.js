test('test toBeNaN', () => {
  expect(NaN).toBeNaN()
  expect(parseInt('')).toBeNaN()
  expect(1).not.toBeNaN()
})