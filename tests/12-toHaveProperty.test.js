const houseForSale = require('../src/12-toHaveProperty')

test('test have property', () => {
  // 测试有属性
  expect(houseForSale).toHaveProperty('bath')
  
  // 测试有属性值
  expect(houseForSale).toHaveProperty('bedrooms', 4)

  // 测试无属性
  expect(houseForSale).not.toHaveProperty('pool')

  // 测试有深度属性值
  expect(houseForSale).toHaveProperty('kitchen.area', 20)
  expect(houseForSale).toHaveProperty('kitchen.amenities', [
    'oven',
    'stove',
    'washer',
  ])

  // 测试无深度属性值
  expect(houseForSale).not.toHaveProperty('kitchen.open')

  // 也可以使用数组  <==> obj['kitchen']['amenities'][0]
  expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven')

  // 可以使用点访问与数组进行相互耦合
  expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven'])
})
