/**
 * @module array
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

export default diffArr
