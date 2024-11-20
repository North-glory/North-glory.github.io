##############################################################################
## 现已通过 GitHub Actions 自动部署，只需 'git push' 即可自动部署
## 若不想使用自动部署，可以直接运行命令 'npm run deploy' 本地自动提交部署
##############################################################################

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件 , yarn docs:build
npm run build
rm -rf ../blog/dist/*

# 将build生成的dist目录拷贝至上一层目录中
cp -rf docs/.vuepress/dist ../blog/

# 进入生成的文件夹
cd ../blog/dist

# git初始化，每次初始化不影响推送

git init
git add -A
git commit -m "更新WriteUp"
git branch -M main

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:North-glory/North-glory.github.io.git main