const regitserUser = require('../src/05-toBeCalledWith')

test('use regitserUser test arguments', () => {
  const fn = jest.fn((nickname) => '菜鸟' + nickname)

  regitserUser('黑色传说', fn)
  // toHaveBeenCalledWith 别名
  expect(fn).toBeCalledWith('黑色传说')
  expect(fn).not.toBeCalledWith('紫色传说')
})
