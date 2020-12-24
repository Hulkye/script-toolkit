/**
 * @module transfer
 * @description html解码（反转义）
 * @param { String } text 需要反转义的字符串
 * @param { Boolean } useDom 转换方法选择
 * @return { String }
 */

function htmlDecode(text, useDom) {
  if (text.length === 0) return ''

  let output = ''
  if (useDom) {
    let el = document.createElement('div')
    el.innerHTML = text
    output = el.innerText || el.textContent
    el = null
  } else {
    output = text.replace(/&amp;/g, '&')
    output = output.replace(/&lt;/g, '<')
    output = output.replace(/&gt;/g, '>')
    output = output.replace(/&nbsp;/g, ' ')
    output = output.replace(/&#39;/g, '\'')
    output = output.replace(/&quot;/g, '"')
  }
  return output
}

export default htmlDecode
