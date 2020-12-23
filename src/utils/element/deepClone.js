/**
 * @module element
 * @description 深拷贝
 * @param { Any } data 被拷贝的数据
 * @return { Any } 返回新的数据
 */

import checkType from './checkType'

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

export default deepClone
