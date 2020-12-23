/**
 * @module storage
 * @description 存储localStorage,可设置过期时间
 * @param { String } key localStorage名称
 * @param { String } value 存储值
 * @param { String } expires 过期时间
 * @example
 * setLocal('access_token', '123456', 5000)
 */

function setLocal(key, value, expires) {
  let params = { key, value, expires }
  if (expires) {
    // 记录何时将值存入缓存，毫秒级
    let data = Object.assign(params, { startTime: new Date().getTime() })
    localStorage.setItem(key, JSON.stringify(data))
  } else {
    if (Object.prototype.toString.call(value) === '[object Object]') value = JSON.stringify(value)
    if (Object.prototype.toString.call(value) === '[object Array]') value = JSON.stringify(value)
    localStorage.setItem(key, value)
  }
}

export default setLocal
