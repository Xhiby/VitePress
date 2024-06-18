# 概述

这里记录所有遇见过的前端报错及解决方法

## 大部分错误

1. 检查镜像地址是否为 https://registry.npmmirror.com/
2. 尝试切换 node 版本

## npm 下载 electron 卡住

一般在 npm i 这一步，或者之后的打包步骤会出现 npm 下载失败的问题，原因是 electron 里有几个依赖包是通过 github 下载，因为网络的原因所以无法下载

解决方法：新建.npmrc 文件修改镜像

```cmd
ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
```

## node-gyp 模块下载报错

node-gyp 是一个工具，可以把 C++写的东西弄到 Node 上，然后这个东西它依赖 Python 和 C++环境
