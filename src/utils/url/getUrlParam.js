/**
 * @module url
 * @description 获取url中的某个参数
 * @param { String } paramName 参数名
 */

function getUrlParam(paramName) {
  var reg = new RegExp('(^|&)' + paramName + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return null
}

export default getUrlParam
