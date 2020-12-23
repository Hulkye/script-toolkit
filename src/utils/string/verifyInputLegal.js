/**
 * @module string
 * @description 验证输入字符串
 * @param { String } type 验证类型
 * @param { String } str 被验证字符串
 */

function verifyInputLegal(type, str) {
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

export default verifyInputLegal
