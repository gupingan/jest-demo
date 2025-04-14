/*
​​首次运行​​：执行 jest 27-toMatchSnapshot.test.js --updateSnapshot 生成快照。
Jest 会创建一个 __snapshots__ 文件夹，保存快照文件。
​​后续验证​​：直接运行测试，Jest 会将 user 对象与快照对比。
如果 id 或 createdAt 的类型匹配（如 id 是数字，createdAt 是日期），测试通过。
*/

test('生成用户信息快照', () => {
  // 模拟动态数据
  const user = {
    id: Math.floor(Math.random() * 1000), 
    name: '张三',
    // name: '王五',
    createdAt: new Date(),
  }

  expect(user).toMatchSnapshot(
    {
      id: expect.any(Number), // 匹配任何数字类型的 id
      createdAt: expect.any(Date), // 匹配任何 Date 类型的 createdAt
      // name 必须严格等于 张三，当改动张三为王五时，匹配快照失败！
    },
    '用户信息快照：忽略动态 ID 和时间'
  )
})
