/**
 * @module array
 * @description 数组去重
 * @param { Arrary } arr 要去重的arr
 * @return { Array } 返回一个新的数组，不改变原来的数组
 */

function uniqueArr(arr) {
  return [...new Set(arr)]
}

export default uniqueArr
