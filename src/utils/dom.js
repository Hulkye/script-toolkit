/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 *  hasClass(document.body, 'temp-class')
 */
function hasClass(el, className) {
  return el.classList.contains(className)
}

/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String | string[] } className class名称
 * @example
 *  addClass(document.body, 'temp-class')
 */
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

/**
 * @description 元素删除class
 * @param { HTMLElement } el dom元素
 * @param { (String | Array) } className class名称，可以是多个
 */

function removeClass(el, className) {
  if (Array.isArray(className)) {
    className.forEach(item => {
      if (hasClass(el, item)) {
        el.classList.remove(item)
      }
    })
    return
  }
  if (hasClass(el, className)) {
    el.classList.remove(className)
  }
}

/**
 * @description 获取元素的css属性内容
 * @param { HTMLElement } el dom元素
 * @param { String } cssProp css的属性名称
 * @return { String } css对应的属性的值
 * @example
 * computedStyle(document.body, 'width')
 */
function computedStyle(el, cssProp) {
  if (!el || !cssProp) return
  return document.defaultView.getComputedStyle
    ? document.defaultView.getComputedStyle(el, '')[cssProp]
    : el.currentStyle[cssProp]
}

/**
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

/**
 * @description 动态加载css样式
 * @param { String } url link的地址
 * @param { Object } config link属性配置
 * @return { Promise }
 */
function loadCss(url, config) {
  return new Promise((resolve, reject) => {
    try {
      const link = document.createElement('link')
      link.href = url
      for (let k in config) {
        link[k] = config[k]
      }
      document.getElementsByTagName('head')[0].appendChild(link)
      resolve()
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * @description 动态加载script标签
 * @param { String } url  script 的地址
 * @param { Object } config  script配置
 * @return { Promise } onload的 e
 */
function loadScript(url, config) {
  return new Promise((resolve, reject) => {
    try {
      const body = document.body || document.getElementsByTagName('body')[0]
      const script = document.createElement('script')
      script.src = url
      script.onload = resolve
      script.onerror = reject
      for (let k in config) {
        script[k] = config[k]
      }
      body.appendChild(script)
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * @description 复制网页文字到剪切板
 * @param { String } str 拷贝的内容
 * @example
 * copyText('hello world')
 */
function copyText(str) {
  const textArea = document.createElement('textarea')
  textArea.style.cssText = 'position: absolute; top: -1000px; right: -1000px; z-index: -1000;'
  document.body.appendChild(textArea)
  textArea.value = str
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}

const dom = {
  hasClass,
  addClass,
  removeClass,
  computedStyle,
  randomColor,
  loadCss,
  loadScript,
  copyText
}
export default dom
