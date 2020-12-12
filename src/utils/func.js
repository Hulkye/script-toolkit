/**
 * @description 函数柯里化工具
 * @param { Function } fn 方法
 * @param { Any } agrs 参数，可选
 */
function curry(fn, ...arg) {
  const _this = this
  const args = Array.from(arguments).slice(1)
  // fn.length 属性指明函数的形参个数。
  const len = fn.length

  return function () {
    const _args = Array.from(arguments)
    args.push(..._args)
    if (args.length < len) {
      return curry.call(_this, fn, ...args)
    }

    return fn.apply(_this, args)
  }
}

/**
 * @description 函数防抖
 * @param { Function } fn 需要防抖的函数
 * @param { Number } t 防抖时间，多久以后才能再执行 单位ms
 * @param { Boolean } immediate true: 立刻执行方法且最后一次时间不执行, false: 等t时间之后再执行方法，如果t时间内执行，则在最后一次的t时间之后执行方法，类似动态搜索效果
 */
export function debounce(fn, t, immediate = true) {
  if (typeof fn !== 'function') throw new Error(`第一个参数必须是方法`)
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

/**
 * @description 函数节流
 * @param { Function } fn 需要节流的函数
 * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
 */

function throttle(fn, t = 1000) {
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

/**
 * @description 缓存函数
 * @param { Function } fn  需要被缓存的函数
 */
function memo(fn) {
  let cache = {}
  return function (str) {
    let newStr = str.toString()
    let res = cache[newStr]
    return res || (cache[newStr] = fn(str))
  }
}

/**
 * @description 睡眠函数, 阻塞代码 timer毫秒
 * @param { number } timer  睡眠时长  执行后续的操作
 * @return promise
 */
function sleep(timer) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}

const func = { curry, debounce, throttle, memo, sleep }
export default func
