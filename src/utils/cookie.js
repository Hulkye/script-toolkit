/**
 * @description 获取Cookie
 * @param { String } name cookie名称
 * @returns { (Array | Null) } 返回数据
 */
function get(name) {
  if (name) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    const arr = document.cookie.match(reg)
    return arr && arr[2] ? arr[2] : null
  }
  const getAllCookies = []
  if (document.cookie.length) {
    const arrCookie = document.cookie.split('; ')
    for (let k in arrCookie) {
      getAllCookies.push({
        name: `${unescape(arrCookie[k].split('=')[0])}`,
        value: `${unescape(arrCookie[k].split('=')[1])}`
      })
    }
    return getAllCookies
  } else {
    return null
  }
}

/**
 * @description 设置Cookie
 * @param { String } name cookie名称
 * @param { String } value cooke的值
 * @param { Number } exp 过期时间 默认2小时 单位毫秒
 * @example
 * // 设置name为test的值为12345，设置过期时间为1小时
 * setCookie('test', '12345', 60 * 60 * 1000)
 */
function set(name, value, exp = 60 * 60 * 2 * 1000) {
  const date = new Date()
  date.setTime(date.getTime() + exp)
  document.cookie = `${name}=${escape(value)};expires=${date.toUTCString()}`
}

/**
 * @description 删除Cookie
 * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
 * @returns { Array } 是一个伪数组
 */
function remove(name) {
  const date = new Date()
  date.setTime(date.getTime() - 1)
  if (name) {
    const cookieInfo = getCookie(name)
    if (cookieInfo !== null) {
      document.cookie = `${name}=${cookieInfo};expires=${date.toUTCString()}`
    }
    return
  }
  const allCookies = getCookie()
  for (let k in allCookies) {
    document.cookie = `${allCookies[k].name}=${allCookies[k].value};expires=${date.toUTCString()}`
  }
}

const cookie = { get, set, remove }
export default cookie
