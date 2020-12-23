/**
 * @module device
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

export default getIEVersion
