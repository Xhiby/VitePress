## 概述

Electron 是一个使用 Web 前端技术构建客户端应用的框架，可以让浏览器上的 Web 应用直接运行在客户端

## 不同构建工具的区别

1. Electron
2. Electron-Forge
3. Electron-Builder

简单来说，这三种方式的区别在于打包配置的区别，原生只有 Electron 最基础的打包，另外两种提供了一定程度的自定义空间

## 快速开始-原生

### 初始化 npm 项目

```cmd
npm init
```

```json
{
  // ...
  "main": "index.js",
  "scripts": {
    "start": "electron ."
  }
  // ...
}
```

### 创建 index.html

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

### 创建 index.js

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

### 安装 Electron

一般在安装这一步，或者之后的打包步骤会出现 npm 下载失败的问题，原因是 electron 里有几个依赖包是通过 github 下载，因为网络的原因所以无法下载

解决方法：新建.npmrc 文件修改镜像

```cmd
ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
```

### 运行

```cmd
npm i
npm run start
```

如果你完成上述步骤，桌面上将出现一个窗口显示 Hello World

## 快速开始-Electron-Forge

### 全局安装 electron-forge

```cmd
npm install -g @electron-forge/cli
```

### 初始化项目

这里会给你装各种依赖，需要一点时间

```cmd
electron-forge init 项目名
```

### 运行

```cmd
npm run start
```

## Vue+Electron

完全手动去配置 Vue+Electron 环境有点麻烦，推荐 clone 别人的模板 https://github.com/vitejs/awesome-vite#templates
