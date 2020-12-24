/**
 * @module url
 * @description 判断字符串是否为网址/地址
 * @param { String } str 字符串
 * @return { Boolean }
 */

function isUrl(str) {
  let regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\\@&?=+,.!\\/~%\\$]*)?)$/i
  return regular.test(str)
}

export default isUrl
