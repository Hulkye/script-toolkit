/**
 * @description 字符串转成base64编码
 * @param { String } str 字符串
 * @return { String } str base64 字符串
 */
function base64Encode(str) {
  return window.btoa(str)
}

/**
 * @description base64解码成字符串
 * @param { String } str base64字符串
 * @return { String } 返回str字符串
 */
function base64Decode(str) {
  return window.atob(decodeURIComponent(str))
}

/**
 * @description 文件转成blob流
 * @param { File } dataUrl  单个file
 * @return { Blob } 返回新的文件流  可以append到formdata中
 */
export function fileToBolb(dataUrl) {
  const arr = dataUrl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

const transfer = { base64Encode, base64Decode, fileToBolb }
export default transfer
