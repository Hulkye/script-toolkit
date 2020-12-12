const requireUtils = require.context('./utils', false, /[\w-]+\.js$/)

let commonTool = new Object()

requireUtils.keys().forEach(fileName => {
  const utilExport = requireUtils(fileName).default
  const utilName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  commonTool[utilName] = utilExport
})

export default commonTool
