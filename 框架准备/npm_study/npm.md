## npm 的使用

### node.js
Node.js 是一个基于 Chrome V8 引擎 的 JavaScript 运行时环境。在任何地方安装了 node，那么就可以运行 javascript。所以在服务器上就可以运行 js 了。js 就全栈了。


### node 的安装 同时是 npm 的安装
windows 直接去官网下载，双击安装即可。安装完毕之后，可以在命令行中使用 `node -v` 查看是否安装成功，以及对应的版本号。当安装好 node 之后会自带 一个 npm 工具。所以 npm 不需要单独安装。

### npm 介绍
npm 是 node package manager 简写。意思是 node 的包管理工具。node 的包，其实就是辅助 node 开发的插件(包)，这个包 里面有 node 的后台包， 和所有的前端包。作为前端开发人员，开发项目的时候会用到很多很多的插件(包/依赖)，而且插件的版本是固定。所以当团队合作的时候，就需要整和所有相关包(工作量非常大，尤其是在以后的框架项目中，用到的插件成上万个)。那么 npm 就是一个管理这些包的工具。所以以后的项目基本上都是使用 npm 去管理项目的依赖。

### 如何使用 npm 管理项目依赖
当你在项目中想要使用某个依赖的时候，需要使用 npm 下载到项目中，然后使用。
- 需要将项目变成 node 项目(因为 node 项目中才能使用 npm 管理依赖)，在项目文件夹内打开命令行工具执行 `npm init -y`命令，会自动生成一个 package.json 文件，这个文件就是 node 项目的标志。

- 使用 npm 下载 jquery。执行 `npm install jquery` 在项目下载 jquery。(下载的是最新的版本)，下载完成之后项目内会多一个 node_modules 文件夹，下载的依赖存在这里面。项目内的 package.json 文件内会多一个 dependencies 里面写了安装的依赖和对应的版本号
 
- 当你用了很多插件之后， node_modules 文件就会越来越大，传输很不方便。但是用了 npm 管理的，传输的时候直接删除 node_modules 文件夹。然后再次使用项目的时候直接在项目内运行 `npm i`命令，就会按照 package.json 内记录的依赖以及对应的版本下载

### 项目中如何使用依赖
- 可以按照原来的引入方式直接在 node_modules 中引入(以后不推荐)

- 使用 node 提供的模块导入方式导入


### node 模块
node 的包就叫 node 模块，模块分为三大类
其实 node 认为一个 js 文件就是一个 模块
- 核心模块 (node自带的 后台包)
- 第三方模块 (别人创建好的前端或后端的包)
- 自定义模块 (自己写的 js 文件)

node 环境下(在 node 项目中)，所有模块拥有独立作用域,在 html 中不使用 script 引入。在 script 中使用 node 的模块导入方式引入。但是模块方式导入的语法浏览器不支持(以后需要使用编译功能，将模块语法编译成浏览器支持的语法)。

模块导入导出的语法  模块在项目中的使用
导入 
核心和第三方模块直接使用 require('包名') 导入
自定义模块直接使用 require('路径') 导入

导出  自定义的模块
`index.js  --->  var a = 100`
module.exports = a  

### npm 的一些命令
- `npm install(可简写成i) 包名`  下载对应的包(最新最稳定版本)
- `npm install(可简写成i) 包名@版本号`  下载对应版本的包
- `npm install(可简写成i)` 下载 package.json 内的所有包
- `npm uninstall(可简写成uni) 包名` 卸载包
- `npm install(可简写成i) 包名 -g` 全局下载包，下载到自己的电脑上  (相当于给电脑安装一个软件)
- `npm uninstall(可简写成uni) 包名 -g` 卸载全局安装的包
- 下载包的时候可以添加一些参数 
    - `npm install(可简写成i) 包名 --save-dev(简写成 -D)` ，加了之后会记录在 package.json 的 devDependencies 内
    - `npm install(可简写成i) 包名 --save(简写成 -S)` 加不加这个参没区别，安装包都会记录在 package.json 的 dependencies 内
- `npm init -y` 初始化一个 node 项目

下载包的方式很多，项目内下载方式有两种，区别是不加 -D 下载方式下载的包，我们称为项目的必须依赖(无论何时项目没有这个包，无法运行)， 加了 -D 下载方式下载的包，称为非必须依赖(比如 压缩工具包， 自动添加 css 厂商前缀....)

### npm 的一些配置
- 等待下载包的时候默认没有任何的提示，可以使用 `npm config set loglevel=http` 将所有的 http 清除打印到命令行中
- 有些时候 npm 官方的包，下载很慢，可以使用 `npm config set registry https://registry.npm.taobao.org` 替换下载的镜像源

### 全局的包
- serve 这个包的功能是，在文件夹内新建一个本地服务器， 本地服务器地址  localhost  ===  127.0.0.1  === 本机的 ip 地址

### node 项目

node 项目内的标志性文件就是 package.json 文件，该文件主要了解的有

- 下载的包的存储字段 `dependencies`  `devDependencies`
- main 字段，是包的入口字段。当你引入一个模块的时候，默认引入的就是 入口文件 的导出
- scripts 字段，该字段是项目的脚本字段，当你的项目可能需要执行一些比较复杂的命令的时候，使用脚本字段可以简化命令, 可以使用 `npm run 脚本名` 执行脚本命令，当脚本命令的名称是 start 的时候可以省略 run


json 文件写法，和对象类似，只能使用双引号，除了数字和布尔值之外，都用双引号引上，每一项的最后一项不可以加逗号