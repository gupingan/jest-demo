const regitserUsers = require('../src/06-nthCalledWith')

test('use regitserUser test nth arguments', () => {
  const fn = jest.fn((nickname, gender) => {
    return {
      nickname: `${nickname}${gender ? '王子' : '公主'}`,
      gender,
    }
  })

  regitserUsers(['王子豪', '顾平安', '吴老六'], fn)
  // 第 n 个参数必须是从 1 开始的正整数
  // toHaveBeenNthCalledWith 别名
  expect(fn).nthCalledWith(1, '王子豪')
  expect(fn).nthCalledWith(2, '顾平安')
  expect(fn).not.nthCalledWith(1, '李子豪')
  expect(fn).not.nthCalledWith(2, '吴老六')
  // lastCalledWith 等价写法
  // toHaveBeenLastCalledWith 别名
  expect(fn).lastCalledWith('吴老六')
  expect(fn).not.lastCalledWith('王子豪')
})
