/**
 * @module element
 * @description 检索数据类型并返回数据类型名称
 * @param { Any } variable 要判断的数据
 * @returns { String } 数据类型名，具体参考以下
 * number string boolean null undefined symbol
 * function array object date regexp error ...
 */

function checkType(variable) {
  let str = Object.prototype.toString.call(variable)
  return str.match(/\[object (.*?)\]/)[1].toLowerCase()
}

export default checkType
