/**
 * @module number
 * @description 判断是否为数字类型
 * @param { Number } value 数值
 */

function isDigit(value) {
  var patrn = /^[0-9]*$/
  return !(patrn.exec(value) == null || value == '')
}

export default isDigit
