/**
 * @description 返回两个数组之间的差集
 * @param { Array } args 两个数组
 * @return { Array } 返回数组
 */
function diffArr(a, b) {
  const setB = new Set(b)
  return a.filter(item => {
    return !setB.has(item)
  })
}

/**
 * @description 返回两个数组之间的交集
 * @param { Array } args 两个数组
 * @return { Array } 返回数组
 */
function intersectArr(a, b) {
  const setB = new Set(b)
  return a.filter(item => {
    return setB.has(item)
  })
}

/**
 * @description 返回数组之间的并集
 * @param { Array } args 可以是多个数组，数量不限制
 * @return { Array } 返回数组
 */
function unionArr(...args) {
  return Array.from(new Set([].concat(...args)))
}

/**
 * @description 数组去重
 * @param { Arrary } arr 要去重的arr
 * @return { Array } 返回一个新的数组，不改变原来的数组
 */
function uniqueArr(arr) {
  return [...new Set(arr)]
}

const array = { diffArr, intersectArr, unionArr, uniqueArr }
export default array
