/**
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

/**
 * @description 判断值是否为空 [空的定义有多种]
 * @param {*} value 变量
 */
function isEmpty(value) {
  const varType = checkType(value)
  if (varType === 'null' || varType === 'undefined') return true
  else if (['array', 'string'].includes(varType)) return !value.length
  else if (varType === 'object') return Object.keys(value).length === 0
  else return false
}

/**
 * @description 深拷贝
 * @param { Any } data 被拷贝的数据
 * @return { Any } 返回新的数据
 */
function deepClone(data) {
  const result = {}
  const keys = Object.keys(data)
  for (let k in keys) {
    let type = checkType(data[k])
    switch (type) {
      case 'object':
        result[k] = deepClone(data[k])
        break
      case 'array':
        result[k] = [].concat(data[k])
        break
      default:
        result[k] = data[k]
    }
  }
  return result
}

/**
 * @description 对象继承添加属性、方法[类继承] Object.assign(...arg)的包装
 * @param { Any }   参数为object对象
 * @returns { Object } 返回一个新的对象
 * @example
 * extend({a: 1}, {a: 2, b: 1})   // { a: 2, b: 1 }
 */
function extend(...arg) {
  return deepClone(Object.assign({}, ...arg))
}

const element = { checkType, isEmpty, deepClone, extend }
export default element
