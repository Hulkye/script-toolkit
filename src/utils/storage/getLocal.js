/**
 * @module storage
 * @description 获取localStorage
 * @param { String } key localStorage名称
 * @return 返回数据
 * @example
 * getLocal('access_token')
 */

function getLocal(key) {
  let item = localStorage.getItem(key)
  // 先将拿到的试着进行json转为对象的形式
  try {
    item = JSON.parse(item)
  } catch (error) {
    item = item
  }
  // 如果有startTime的值，说明设置了失效时间
  if (item && item.startTime) {
    let date = new Date().getTime()
    // 如果大于就是过期了，如果小于或等于就还没过期
    if (date - item.startTime > item.expires) {
      localStorage.removeItem(key)
      return false
    } else {
      return item.value
    }
  } else {
    return item
  }
}

export default getLocal
