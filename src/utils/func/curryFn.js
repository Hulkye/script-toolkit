/**
 * @module func
 * @description 函数柯里化
 * @param { Function } fn 方法
 * @param { Any } agrs 参数，可选
 */

function curryFn(fn, ...arg) {
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

export default curryFn
