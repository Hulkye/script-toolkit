/**
 * @module transfer
 * @description base64解码成字符串
 * @param { String } str base64字符串
 * @return { String } 返回str字符串
 */
function base64Decode(str) {
  return window.atob(decodeURIComponent(str))
}

export default base64Decode
