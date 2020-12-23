/**
 * @module dom
 * @description 返回rgba随机色
 * @param { Number } opacity    透明度 0～1之间
 * @return { String } rgba色值
 */

function randomColor(opacity = 1) {
  const r = ~~(Math.random() * 256)
  const g = ~~(Math.random() * 256)
  const b = ~~(Math.random() * 256)
  return `rgba(${r},${g},${b},${opacity})`
}

export default randomColor
