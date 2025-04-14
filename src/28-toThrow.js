function throwError() {
  throw new Error('This is an error')
}

function normal() {
  return 'This is a normal function'
}

module.exports = { throwError, normal }
