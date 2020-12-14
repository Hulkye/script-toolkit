# script-toolkit

## introduce

JavaScript工具箱子，前端业务开发工具，提高开发效率



## use

**1. 静态引入**

*(1) script标签直接引*

下载`/dist/index.iife.js`，该打包文件暴露`jsTools`变量，可直接使用。

```html
<script src="~/index.iife.js"></script>
<script>
	console.log(jsTools)
</script>
```



*(2) es模式引入*

下载`/dist/index.esm.js`，该打包文件直接export出变量对象。

```js
import jsTools from '~/index.esm.js'
console.log(jsTools)
```



*(2) CommonJS模式引入*

下载`/dist/index.cjs.js`，该打包文件通过`module.exports`，适用于node、webpack。

```js
const jsTools = require('~/index.cjs.js')
console.log(jsTools)
```



**2. npm/yarn引入**

*npm:*

```shell
npm install rollup --global
```

*yarn:*

```
yarn add script-toolkit
```

*code:*

```js
import jsTools from 'script-toolkit'
console.log(jsTools)
```



## function

待更新

- array
  - diffArr
  - intersectArr
  - unionArr
  - uniqueArr
- cookie
  - get
  - set
  - remove
- device
  - getIEVersion
  - isMobile
  - isWx
- dom
  - hasClass
  - addClass
  - removeClass
  - computedStyle
  - randomColor
  - loadCss
  - loadScript
  - copyText
- element
  - checkType
  - isEmpty
  - deepClone
  - extend
- func
  - curry
  - debounce
  - throttle
  - memo
  - sleep
- local
  - get
  - set
  - remove
  - clear
- number
  - isDigit
  - getBetweenRandom
- string
  - verifyInput
  - omitStr
- transfer
  - base64Encode
  - base64Decode
  - fileToBolb
- url
  - isURL
  - getUrlParam
  - deleteUrlParam
  - ObjToUrlParam
  - urlParamToObj

