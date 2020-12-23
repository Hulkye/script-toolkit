/**
 * @module device
 * @description 判断当前是否是微信浏览器
 * @return { Boolean }
 */

function isWx() {
  const ua = window.navigator.userAgent
  const uaLower = ua.toLowerCase()
  return String(uaLower.match(/MicroMessenger/i)) === 'micromessenger'
}

export default isWx
