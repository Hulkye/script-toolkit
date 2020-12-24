/**
 * @module element
 * @description 对象继承添加属性、方法[类继承] Object.assign(...arg)的包装
 * @param { Any }   参数为object对象
 * @returns { Object } 返回一个新的对象
 * @example
 * extend({a: 1}, {a: 2, b: 1})   // { a: 2, b: 1 }
 */

import deepClone from './deepClone'

function extendObj(...arg) {
  return deepClone(Object.assign({}, ...arg))
}

export default extendObj
