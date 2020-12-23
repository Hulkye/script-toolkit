/**
 * @module dom
 * @description 获取当前页面的滚动位置
 * @param { String } el 元素
 * @example
 * getScrollPosition() //  {x: 3, y: 6023}
 */

function getScrollPosition(el = window) {
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  }
}

export default getScrollPosition
