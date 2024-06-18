一般初始化的 Vite 项目是没有设置@的，这里记录一下

```js
// 引入path
import { resolve } from "path"
```

```js
// 跟plugins同级
return {
  // plugins...
  resolve: {
    // 配置路径别名
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
}
```

另外 import 引入的 **vue 文件是不能省略后缀**的，只有 js 文件可以
