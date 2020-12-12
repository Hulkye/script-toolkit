/**
 * @description 判断是否为数字类型
 * @param { Number } value 数值
 */
function isDigit(value) {
  var patrn = /^[0-9]*$/
  return !(patrn.exec(value) == null || value == '')
}

/**
 * @description 获取两个数之间的随机数
 * @param { Number } n 第一个数
 * @param { Number } m 第二个数
 */
function getBetweenRandom(n, m) {
  return parseInt(Math.random() * (m - n + 1) + n)
}

const number = { isDigit, getBetweenRandom }
export default number
