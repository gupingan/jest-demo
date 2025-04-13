/**
 * 对数组每个元素执行回调函数
 * 
 * @param {*} arr 
 * @param {*} fn 
 */
function forEvery(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    fn(element)
  }
}

module.exports = forEvery
