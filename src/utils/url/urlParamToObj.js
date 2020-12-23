/**
 * @module url
 * @description url地址的参数转化成键值对的对象格式
 * @param { string } url 解析的url地址
 * @returns { Object }
 */

function urlParamToObj(url = window.location.search) {
  const newUrl = url.slice(url.indexOf('?'))
  const sp = new URLSearchParams(newUrl)
  const obj = {}
  for (let [k, v] in sp.entries()) {
    obj[k] = v
  }
  return obj
}

export default urlParamToObj
