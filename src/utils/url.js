/**
 * @description 判断字符串是否为网址/地址
 * @param { String } str 字符串
 * @return { Boolean }
 */
function isURL(str) {
  var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i
  return regular.test(str)
}

/**
 * @description 获取url中的某个参数
 * @param { String } paramName 参数名
 */
function getUrlParam(paramName) {
  var reg = new RegExp('(^|&)' + paramName + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return null
}

/**
 * @description 移除url的某一个参数
 * @param { Array } paramNames 参数名称的数组
 * @param { URL } url url地址
 * @return { String } 返回一个新地址
 */
export function deleteUrlParam(paramNames, url = location.href) {
  const newSearch = url.split('?')[1]
  if (!newSearch) return url

  const hostAndPath = url.split('?')[0]
  const urlSearch = new URLSearchParams(newSearch)
  paramNames.forEach(param => {
    urlSearch.delete(param)
  })
  return urlSearch.toString() ? `${hostAndPath}?${urlSearch.toString()}` : hostAndPath
}

/**
 * @description 把对象格式的参数转成键值对，并以&连接
 * @param { Object } obj 对象
 * @returns { string } a=1&b=2
 */
function ObjToUrlParam(obj) {
  let result = ''
  for (let key in obj) {
    result += key + '=' + encodeURIComponent(obj[key]) + '&'
  }
  result = result.substr(0, result.length - 1)
  return result
}

/**
 * @description url地址的参数转化成键值对的对象格式
 * @param { string } url 解析的url地址
 * @returns { Object }
 */
function urlParamToObj(url = window.location.search) {
  const newUrl = url.slice(url.indexOf('?'))
  const sp = new URLSearchParams(newUrl)
  const obj = {}
  for (let [k, v] of sp.entries()) {
    obj[k] = v
  }
  return obj
}

const url = { isURL, getUrlParam, deleteUrlParam, ObjToUrlParam, urlParamToObj }
export default url
