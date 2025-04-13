function testReturnFn(fn) {
  try {
    fn()
  } catch (error) {}
}

module.exports = testReturnFn
