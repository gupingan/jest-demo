const users = []

function getNextUserId() {
  return Math.max(0, ...users.map((u) => u.id)) + 1
}

/**
 * 注册一个用户，传入昵称，可以使用回调处理用户昵称
 *
 * @param {*} nickname
 * @param {*} fn
 */
function regitserUser(nickname, fn) {
  const user = {
    id: getNextUserId(),
    nickname: fn(nickname),
  }

  users.push(user)
}

module.exports = regitserUser
