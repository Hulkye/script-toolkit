/**
 * @module device
 * @description 判断是否是移动端
 * @return { Boolean } 返回是否是移动端的布尔值
 */

function isMobile() {
  const ua = window.navigator.userAgent
  return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
    ua
  )
}

export default isMobile
