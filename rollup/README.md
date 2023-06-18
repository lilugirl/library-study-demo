# liuyi-clone
实现JavaScript引用类型数据的神拷贝功能

## 使用者指南
通过 npm 下载安装代码
```bash
$ npm install liuyi-clone
```

如果使用Node.js环境
```js
var { clone } from = require('liuyi-clone');
clone({a:1});
```

如果使用webpack等环境
```js
import { clone } from 'liuyi-clone';
clone({a:1});
```

如果使用浏览器环境
```html
<script src="node_modules/liuyi-clone/dist/index.aio.js"></script>
<script>
     clone({a:1})
</script>
```


## 贡献者指南
首次运行需要先安装依赖
```bash
$ npm install
```

一键打包生成生产代码
```bash
$ npm run buiid
```

运行单元测试
```bash
npm test
```