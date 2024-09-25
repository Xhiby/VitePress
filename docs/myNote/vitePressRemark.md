# Vite Press 备注

### 因为也不是经常提交，每次提交可能会忘记步骤，所以记录一下

### Tips：

1. 如未配置公钥请先前往 GitHub 配置 SSH 公钥

2. 开关梯子都交不了的情况下改一下 git 配置

地址是梯子地址和端口
```git
git config --global https.proxy https://127.0.0.1:7897
```

交完记得还原配置
```git
git config –global –unset https.proxy
```

3. 文档仓库有两个分支，master 是源代码分支，pages 是源码生成的静态页面的分支

### 1. 先把文档源码 Git 提交到 master 分支

### 2. 然后更新页面 Git Bash 里运行 npm run publish

这个是写好的一个命令，打包完发布到 page 分支并删除打包后的文件
