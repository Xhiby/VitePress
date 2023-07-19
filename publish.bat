# 打包
call npm run docs:build
 
# 进到dist目录
cd docs/.vitepress/dist
 
# 执行这些git命令
git init  
git add -A
git commit -m 'deploy'
 
# 提交到这个分支
git push -f https://github.com/Xhiby/VitePress.git master:pages  

# 返回项目根目录
cd -
 
# 删除dist文件夹
rm -rf docs/.vitepress/dist  