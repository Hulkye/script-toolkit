/**
 * @module number
 * @description 判断一个数是否为素数（质数）
 * @param { Number } number 数值
 */

function isPrimes(number) {
  if (typeof number !== 'number') {
    throw Error('isPrimes first argument is not a number')
  }
  if (number == 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false
    }
  }
  return true
}

export default isPrimes
