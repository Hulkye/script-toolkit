/* /build/build.js */
import buble from 'rollup-plugin-buble' // 在rollup.js打包的过程中进行代码编译，将ES6+代码编译成ES2015标准
import flow from 'rollup-plugin-flow-no-whitespace' // 去除flow静态类型检查代码
import node from 'rollup-plugin-node-resolve' // 解析node_modules 中的模块
import commonjs from 'rollup-plugin-commonjs' // 转换 CJS -> ESM, 通常配合上面一个插件使用
import babel from 'rollup-plugin-babel' // 打包的时候使用Babel
import multi from '@rollup/plugin-multi-entry' // 多入口工具
import { terser } from 'rollup-plugin-terser' // 转义并压缩js文件
// import { eslint } from 'rollup-plugin-eslint' // eslint语法检测

const path = require('path')
const resolve = _path => path.resolve(__dirname, './', _path)
const version = require('./package.json').version
const env = process.env.RUN_ENV
const banner = `
/**
 * script-toolkit v${version}
 *
 * (c) ${new Date().getFullYear()} Hulkye
 */
`

const outputs = [
  {
    file: resolve('dist/index.js'),
    format: 'umd' // 通用模块，兼容amd.cjs.iife
  },
  {
    file: resolve('dist/index.cjs.js'),
    format: 'cjs' // CommonJS
  },
  {
    file: resolve('dist/index.esm.js'),
    format: 'es' // ES 模块
  },
  {
    file: resolve('dist/index.iife.js'),
    format: 'iife' // 自执行，适用于<script>标签
  }
]

function buildRollupConfig(output) {
  let config = {
    input: [resolve('src/index.js')],
    plugins: [multi(), flow(), node(), commonjs(), buble(), babel({ runtimeHelpers: true })],
    output: {
      file: output.file,
      format: output.format,
      banner,
      name: 'jsTools'
    }
  }

  if (env.includes('prod')) {
    config.plugins.push(terser()) // 为生产环境压缩代码
  }

  return config
}

export default outputs.map(buildRollupConfig)
