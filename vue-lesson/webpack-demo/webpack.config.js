// webpack 编译打包的默认配置文件 webpack.config.js

// node 的核心包 path
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 导出的对象就是 webpack 的配置
module.exports = {
  // entry  打包的入口文件   也就到底需要打包编译哪个文件
  entry: './src/index.js',
  // output  打包的出口    编译打包之后放到哪 叫什么
  
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    // 每次编译先删除 dist 文件夹 内的内容
    clean: true
  },


  // 管理输出， 自动创建 html 并且自动引入 编译之后的 js  需要使用 html-webpack-plugin 插件
  plugins: [
    new HtmlWebpackPlugin({
      // 创建的 html 想要用一个模版
      template: './public/index.html'
    })
  ],

  // 项目的开发阶段和生产阶段
  // 开发阶段只需要浏览器中实时能看到写的代码及效果
  // 生产阶段要拿到成品的 index.html  js css 等
  // 那么开发阶段编译打包次数较多 启动一个服务器实时打包编译
  mode: 'development',
  // 开发环境服务器
  devServer: {
    // 服务器启动的目录
    static: './dist',
    port: '8080'
  },
};



// webpack 的配置分为 4 大类
// 1. entry  入口
// 2. output 出口
// 3. loader 加载器(不同文件的编译)
// 4. plugin 插件   额外的功能


// 当使用命令执行 npx webpack 的使用是使用 webpack 编译打包功能

// 在命令行直接使用 webpack 是不可以的，其实就是相当于在电脑上找 webpack 命令，并不是在项目中找。如果电脑上全局安装了 webpack 的话，是可以使用的。所以 npx webpack 的意思是在项目中找 webpack 执行

// 在 package.json 的脚本字段中 直接运行 webpack 命令是在项目找 webpack