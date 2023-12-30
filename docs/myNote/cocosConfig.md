## 介绍

Cocos2D 是一个游戏开发引擎，主要用来做手游和体量小的端游，并且主要是做 2D 的

## 环境搭建

> 各个平台的环境搭建
> https://docs.cocos.com/cocos2d-x/manual/zh/installation/

官方的环境搭建说的不是很明确，好像是要下各种软件才行，其实并不是，这些你都可以不下，只用下一个 Python2.x 就行

## 详细步骤

### 下载 cocos

https://cocos2d-x.org/filedown/cocos2d-x-3.17.2

### 下载 Python2.x

随便去哪下都行

### setup.py

运行根目录下的 setup.py 文件，会让你设置一些环境变量，没有就跳过

### 检查是否成功安装

命令行输入 cocos -v
```cmd
cocos -v
```

### 创建项目
```shell
# 模板
cocos compile -s <path to your project> -p <platform> -m <mode> -o <output directory>

# js项目
cocos new MyGame -p com.MyCompany.MyGame -l cpp -d ~/MyCompany
```

### 运行项目
项目根目录下运行
```shell
cocos run . -p web
```