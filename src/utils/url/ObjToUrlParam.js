/**
 * @module url
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

export default ObjToUrlParam
