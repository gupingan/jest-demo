/**
 * 计算对象数组中的某个元素的和
 * 
 * @param {*} arr 数组或者其他对象（通常不可行）
 * @param {*} fn 对于每个数组对象执行的回调函数
 * @returns 
 */
function caculateTotal(arr, fn) {
  if (!Array.isArray(arr)) return

  return arr.reduce((total, item) => {
    return total + fn(item)
  }, 0)
}

module.exports = caculateTotal