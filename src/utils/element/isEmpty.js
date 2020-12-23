/**
 * @module element
 * @description 判断值是否为空 [空的定义有多种]
 * @param {*} value 变量
 */

import checkType from './checkType'

function isEmpty(value) {
  const varType = checkType(value)
  if (varType === 'null' || varType === 'undefined') return true
  else if (['array', 'string'].includes(varType)) return !value.length
  else if (varType === 'object') return Object.keys(value).length === 0
  else return false
}

export default isEmpty
