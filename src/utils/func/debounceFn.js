/**
 * @module func
 * @description 函数防抖
 * @param { Function } fn 需要防抖的函数
 * @param { Number } t 防抖时间，多久以后才能再执行 单位ms
 * @param { Boolean } immediate true: 立刻执行方法且最后一次时间不执行, false: 等t时间之后再执行方法，如果t时间内执行，则在最后一次的t时间之后执行方法，类似动态搜索效果
 */

export function debounceFn(fn, t, immediate = true) {
  if (typeof fn !== 'function') throw new Error('第一个参数必须是方法')
  let time
  //  立刻执行第一次该方法
  if (immediate) {
    return function () {
      clearTimeout(time)
      if (!time) {
        fn.apply(this, arguments)
      }
      time = setTimeout(function () {
        setTimeout(time)
        time = null
      }, t)
    }
  } else {
    // 满足 time 时间结束之后自动执行一次该方法
    return function () {
      clearTimeout(time)
      time = setTimeout(function () {
        setTimeout(time)
        fn.apply(this, arguments)
        time = null
      }, t)
    }
  }
}

export default debounceFn
