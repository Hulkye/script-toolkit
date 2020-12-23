/**
 * @module array
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

export default intersectArr
