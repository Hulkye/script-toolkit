/**
 * @module func
 * @description 睡眠函数, 阻塞代码 timer毫秒
 * @param { number } timer  睡眠时长  执行后续的操作
 * @return promise
 */

function sleepFn(timer) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}

export default sleepFn
