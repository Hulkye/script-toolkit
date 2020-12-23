/**
 * @module dom
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

export default loadCss
