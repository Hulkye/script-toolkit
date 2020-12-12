/**
 * @description 返回IE浏览器的版本号
 * @return { String }
 */
function getIEVersion() {
  if (window.ActiveXObject) {
    var v = window.navigator.userAgent.match(/MSIE ([^;]+)/)[1]
    return parseFloat(v.substring(0, v.indexOf('.')))
  }
  return false
}

/**
 * @description 判断是否是移动端
 * @return { Boolean } 返回是否是移动端的布尔值
 */
function isMobile() {
  const ua = window.navigator.userAgent
  return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
    ua
  )
}

/**
 * @description 判断当前是否是微信浏览器
 * @return { Boolean }
 */
function isWx() {
  const ua = window.navigator.userAgent
  const uaLower = ua.toLowerCase()
  return String(uaLower.match(/MicroMessenger/i)) === 'micromessenger'
}

const device = { getIEVersion, isMobile, isWx }
export default device
