/**
 * @module transfer
 * @description 字符串转成base64编码
 * @param { String } str 字符串
 * @return { String } str base64 字符串
 */

function base64Encode(str) {
  return window.btoa(str)
}

export default base64Encode
