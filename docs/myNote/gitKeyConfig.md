# GitHub 配置 SSH 公钥

1. 命令基本都需要在 Git Bash 中运行
2. 如果是在 git push 的时候需要你验证，而且你还开了梯子，可以把梯子关了试一下

### 1. 查看本机是否有公钥

命令行输入

```cmd
cd ~/.ssh ls
```

如果有 id_rsa 就 命令行输入

```cmd
cat ~/.ssh/id_rsa.pub
```

复制出现的内容前往第 3 步

也可以进入目录查看
C:\Users\Administrator\\.ssh

有 id_rsa.pub 就使用记事本打开复制内容前往第 3 步

### 2. 如果没有公钥

命令行输入

```cmd
ssh-keygen -t rsa -C "xxx@xx.com"
```

一直回车直到可以输入

```cmd
cat ~/.ssh/id_rsa.pub
```

复制出现的内容前往第 3 步

### 3. 前往 GitHub 设置

打开 Settings
![](../assets/images/myNote\gitKeyConfig\1.png)

点击 SSH and GPG keys
![](../assets/images/myNote\gitKeyConfig\2.png)

点击右边的 New SSH key

输入你刚刚复制的东西，点 Add SSH key，然后会要你输密码，输完密码就弹窗成功就 ok 了
