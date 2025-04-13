const users = []

function getNextUserId() {
  return Math.max(0, ...users.map((u) => u.id)) + 1
}

/**
 * 注册一个用户，传入昵称组，可以使用回调批量处理昵称
 *
 * @param {Array<string>} names
 * @param {*} fn
 */
function regitserUsers(names, fn) {
  for (const name of names) {
    const user = {
      id: getNextUserId(),
      nickname: fn(name),
    }
  
    users.push(user)
  }
}

module.exports = regitserUsers
