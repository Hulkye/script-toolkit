/**
 * @module storage
 * @description 移除localStorage
 * @param { String } key localStorage名称
 * @example
 * removeLocal('access_token') // 移除单个
 * removeLocal() // 清空所有
 */

function removeLocal(key) {
  if (key) localStorage.removeItem(key)
  else localStorage.clear()
}

export default removeLocal
