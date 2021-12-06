// webpack 编译打包的默认配置文件 webpack.config.js

// node 的核心包 path
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
// 导出的对象就是 webpack 的配置
module.exports = {
  // entry  打包的入口文件   也就到底需要打包编译哪个文件
  entry: './src/main.js',
  // output  打包的出口    编译打包之后放到哪 叫什么

  output: {
    filename: 'boundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 每次编译先删除 dist 文件夹 内的内容
    clean: true
  },
  // 默认 webpack 5 打包编译的时候使用的是箭头函数 es6 语法， ie 不支持箭头函数
  // 构建目标 ，打包编译的时候目标文件
  target: ['web', 'es5'],
  // 项目的开发阶段和生产阶段
  // 开发阶段只需要浏览器中实时能看到写的代码及效果
  // 生产阶段要拿到成品的 index.html  js css 等
  // 那么开发阶段编译打包次数较多 启动一个服务器实时打包编译
  mode: 'development',
  // 开发环境服务器

  // 资源映射
  // 使用一个开发工具将错误和警告映射回源代码
  devtool: 'inline-cheap-source-map',

  devServer: {
    // 服务器启动的目录
    static: './dist',
    port: '8081',
    hot: true,
    client: {
      logging: 'none',
      overlay: true,
    },
    // 服务器内找不到的地址通通指向 index.html
    // 当你使用 vue 路由的时候路由模式使用的是 history，在非首页刷新 404，需要添加该配置
    historyApiFallback: true,
  },

  // 加载器 loader
  module: {
    // 加载器规则
    // 规定哪些文件可以被当做模块来使用  默认 js 直接可以使用
    rules: [
      // css 模块
      // 当写样式的时候有些 css3 的样式需要添加浏览器厂商前缀，手动添加太麻烦，我们可以借助 postcss-loader 帮助我们自动添加
      {
        // 文件类型检测 满足 test 检测的才使用对应的的规则
        test: /\.css$/i,
        // 使用哪些包处理这个文件
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      //  less
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
      },

      // image
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // 对于 webpack 5 来说可以直接将模块设置成 资源模块， 使用 type ，无需下载对应的加载器来处理模块
        // 资源模块的种类参考官方文档
        type: 'asset/resource',
      },
      // font
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // js 
      // 默认 webpack 对 js 有处理
      // 使用babel-loader 处理 js 模块
      // 并且使用 .babel 配置 babel
      // "@babel/plugin-transform-runtime" 用来处理 async 语法糖
      // ie 默认不支持 promise   需要使用其他的插件来处理
      // ie 默认不支持新的js语法 比如数组的 includes 等 需要使用 @babel/runtime-corejs3
      // 可以使用 babel 的 target 配置浏览器兼容但是不生效，需要在项目的 package.json 设置
      {
        test: /\.js$/i,
        use: ['babel-loader'],
        // 不编译 node_modules 下的 js
        exclude: /node_modules/
      },
      // vue 组件
      // 除了使用 loader 之外还需要使用其插件 必须的
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  // 管理输出， 自动创建 html 并且自动引入 编译之后的 js  需要使用 html-webpack-plugin 插件
  plugins: [
    new HtmlWebpackPlugin({
      // 创建的 html 想要用一个模版
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ],
};



// webpack 的配置分为 4 大类
// 1. entry  入口
// 2. output 出口
// 3. loader 加载器(不同文件的编译)
// 4. plugin 插件   额外的功能


// 当使用命令执行 npx webpack 的使用是使用 webpack 编译打包功能

// 在命令行直接使用 webpack 是不可以的，其实就是相当于在电脑上找 webpack 命令，并不是在项目中找。如果电脑上全局安装了 webpack 的话，是可以使用的。所以 npx webpack 的意思是在项目中找 webpack 执行

// 在 package.json 的脚本字段中 直接运行 webpack 命令是在项目找 webpack

