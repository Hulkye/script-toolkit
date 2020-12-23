/**
 * @module url
 * @description 移除url的某一个参数
 * @param { Array } paramNames 参数名称的数组
 * @param { URL } url url地址
 * @return { String } 返回一个新地址
 */

export function deleteUrlParam(paramNames, url = location.href) {
  const newSearch = url.split('?')[1]
  if (!newSearch) return url

  const hostAndPath = url.split('?')[0]
  const urlSearch = new URLSearchParams(newSearch)
  paramNames.forEach(param => {
    urlSearch.delete(param)
  })
  return urlSearch.toString() ? `${hostAndPath}?${urlSearch.toString()}` : hostAndPath
}

export default deleteUrlParam
