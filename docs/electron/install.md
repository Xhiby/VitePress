## 概述

Electron 是一个使用 Web 前端技术构建客户端应用的框架，可以让浏览器上的 Web 应用直接运行在客户端

## 创建项目

初始化一个 npm 项目

```cmd
npm init
```

创建初始化 npm 项目时选择的入口 js 文件

安装 Electron

```cmd
npm install --save-dev electron
```

创建一个 HTML 文件

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

入口 js 文件写入

```js
// 引入要用的 模块
const { app, BrowserWindow } = require("electron")

// 创建窗口的函数
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  // 窗口将在哪个文件加载
  win.loadFile("index.html")
}

// 在whenReady内调用方法
app.whenReady().then(() => {
  createWindow()
})
```

如果你完成上述步骤，桌面上将出现一个窗口显示 Hello World
