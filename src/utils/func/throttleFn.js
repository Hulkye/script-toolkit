/**
 * @module func
 * @description 函数节流
 * @param { Function } fn 需要节流的函数
 * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
 */

function throttleFn(fn, t = 1000) {
  if (typeof fn !== 'function') throw new Error(`第一个参数必须是方法`)
  const _fn = fn
  let time = null
  let first = true
  return function () {
    let arg = arguments
    let _this = this
    if (first) {
      _fn.apply(_this, arg)
      first = false
      return
    }
    if (time) return
    time = setTimeout(function () {
      setTimeout(time)
      time = null
      _fn.apply(_this, arg)
    }, t)
  }
}

export default throttleFn
