# 安装及使用

* 安装环境
  * windows上下载node，并安装
* node环境下windows
  * 在集成终端(cmd)上打开我们的项目文件夹

* 安装项目依赖
  * 在集成终端中输入 npm i / npm install
* 开启本地服务，在本地服务上运行
  * 在集成终端中输入 npm run serve
  * 等项目打包完成 打开浏览器 输入对应回环路由地址
* 打包项目，在nginx中运行
  * 在集成终端中输入 npm run build
  * 等项目打包完成会在项目目录中生成 dist 文件夹
  * 复制dist文件夹 至 nginx/html 中
  * 打开nginx服务
  * 输入nginx对应配置文件中的IP地址即可访问项目
