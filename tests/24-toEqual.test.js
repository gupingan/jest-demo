const can1 = {
  flavor: 'grapefruit',
  ounces: 12,
  coco: undefined,
}
const can2 = {
  flavor: 'grapefruit',
  ounces: 12,
}

const arr1 = [undefined, 1, 2]

const arr2 = [, 1, 2]

test('have all the same properties', () => {
  // 使用 Object.is 比较值
  // 深度比较对象的属性值，而不是引用
  // 对象中含有 undefined 属性，会被忽略
  // 列表中存在元素 undefined，同理被忽略
  // 稀疏性在保持对应 undefined 时，也会被忽略
  expect(can1).toEqual(can2)
  expect(arr1).toEqual(arr2)

  // 比较严格相等，会考虑稀疏性和 undefined 值
  expect(can1).not.toStrictEqual(can2)
  expect(arr1).not.toStrictEqual(arr2)
})
test('are not the exact same can', () => {
  // 使用 Object.is 比较值，比较对象的引用
  expect(can1).not.toBe(can2)
  expect(arr1).not.toBe(arr2)
})
