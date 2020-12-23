/**
 * @module number
 * @description 获取两个数之间的随机数
 * @param { Number } min 第一个数
 * @param { Number } max 第二个数
 */

function randomBetween(min = 1, max = 100) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw Error('randomBetween arguments is not a number')
  }
  if (min > max) {
    throw Error('randomBetween first argument must less than second param')
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default randomBetween
