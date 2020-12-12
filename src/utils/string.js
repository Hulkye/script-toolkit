/**
 * @description 验证输入字符串
 * @param { String } type 验证类型
 * @param { String } str 被验证字符串
 */
function verifyInput(type, str) {
  let reg = ''
  switch (type) {
    default:
      break

    case 'username':
      // 6-18位的包含大小写字母、数字、特殊符号- _ 的用户名
      reg = /^[a-zA-Z0-9_-]{6,18}$/
      break

    case 'password':
      // 最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
      reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
      break

    case 'phone':
      reg = /^1[34578]\d{9}$/
      break

    case 'email':
      reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
      break

    case 'idcard':
      reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      break

    case 'ipv4':
      reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
      break

    // 企业社会信用代码
    case 'orgcode':
      reg = /^[0-9A-Z]{18}$/
      break

    // 是否全是中文
    case 'chinese':
      reg = /^[\u3220-\uFA29]+$/
      break
  }
  return reg.test(str)
}

/**
 * @description 计算字符串长度 isStrict为true的时候 返回一个字符串的长度，汉字算2个字符长度
 * @param { String } str  要计算的字符串
 * @param { Boolean } isStrict  true 返回一个字符串的长度，汉字算2个字符长度; false 直接返回长度
 * @return { Number } 返回字符串长度
 * @example
 * const str = 'jsTool库'
 * console(calcStrLength(str))
 * console(calcStrLength(str, true))
 */
function calcStrLength(str, isStrict) {
  if (typeof str !== 'string') {
    return 0
  }

  if (!isStrict) return str.length

  return Array.from(str).reduce((total, current) => {
    return (total += current.charCodeAt(0) > 255 ? 2 : 1)
  }, 0)
}

/**
 * @description 格式化替换字符串
 * @param { string } str 需要操作的字符串
 * @param { number } start  开始位置
 * @param { number } end  结束位置 3 的话就是倒数第三个 倒数第三个不被替换
 * @param { string } replaceStr  替换的值 默认 '*'
 * @example
 * omitStr('185098535', 2, 3, '*') // 18****535
 */
function omitStr(str, start, end, replaceStr = '*') {
  const startPosition = start || 0
  const endPosition = end || 0
  const count = str.length - startPosition - endPosition
  return (
    str.substr(0, startPosition) + replaceStr.repeat(count) + str.substr(count + startPosition, end)
  )
}

const string = { verifyInput, calcStrLength, omitStr }
export default string
