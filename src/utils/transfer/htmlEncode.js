/**
 * @module transfer
 * @description html编码（转义）
 * @param { String } text 需要转义的字符串
 * @param { Boolean } useDom 转换方法选择
 * @return { String }
 */

function htmlEncode(text, useDom) {
  if (text.length == 0) return ''

  let output = ''
  if (useDom) {
    let el = document.createElement('div')
    el.textContent != undefined ? (el.textContent = text) : (el.innerText = text)
    output = el.innerHTML
    el = null
  } else {
    output = text.replace(/&/g, '&amp;')
    output = output.replace(/</g, '&lt;')
    output = output.replace(/>/g, '&gt;')
    output = output.replace(/\s/g, '&nbsp;')
    output = output.replace(/\'/g, '&#39;')
    output = output.replace(/\"/g, '&quot;')
  }
  return output
}

export default htmlEncode
