/**
 * @module func
 * @description 函数只能调用一次
 * @param { Function } fn  需要被处理的函数
 */

function onceFn(fn) {
  let called = false
  return function (...args) {
    if (called) return
    called = true
    return fn.call(this, args)
  }
}

export default onceFn
