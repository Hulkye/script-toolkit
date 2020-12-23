/**
 * @module func
 * @description 缓存函数
 * @param { Function } fn  需要被缓存的函数
 */

function memoFn(fn) {
  let cache = {}
  return function (str) {
    let newStr = str.toString()
    let res = cache[newStr]
    return res || (cache[newStr] = fn(str))
  }
}

export default memoFn
