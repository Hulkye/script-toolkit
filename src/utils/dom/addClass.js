/**
 * @module dom
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String | string[] } className class名称
 * @example
 *  addClass(document.body, 'temp-class')
 */

import hasClass from './hasClass'

function addClass(el, className) {
  if (Array.isArray(className)) {
    className.forEach(item => {
      if (!hasClass(el, item)) {
        el.classList.add(item)
      }
    })
    return
  }
  if (!hasClass(el, className)) {
    el.classList.add(className)
  }
}

export default addClass
