/**
 * @module dom
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

export default loadScript
