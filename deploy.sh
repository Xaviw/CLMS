#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件，设置base路径
npm run build:mock --base-href="/CLMS/"

# 进入生成的文件夹
cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Xaviw/CLMS.git master:gh-pages

cd -