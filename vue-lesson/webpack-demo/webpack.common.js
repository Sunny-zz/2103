// 公共 webpack 配置

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')


module.exports = (env) => {
  console.log(env.NODE_ENV)
  return  {
    // entry  打包的入口文件   也就到底需要打包编译哪个文件
    entry: {
      app: path.resolve(__dirname, '/src/main.js')
    },
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
  
    // 配置模块如何解析
    // 1. 模块后缀名可省略
    // 2. 设置路径别名
    resolve: {
      extensions: ['.js', '.jsx', '...'],
      alias: {
        // 用 @ 表示根目录下的 src 文件夹路径
        '@': [
          path.resolve(__dirname, 'src/')
        ]
      }
    },
  
    // 加载器
    module: {
      rules: [
        // vue 组件
        // 除了使用 loader 之外还需要使用其插件 必须的
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        // js 
        {
          test: /\.js$/i,
          use: ['babel-loader'],
          // 不编译 node_modules 下的 js
          exclude: /node_modules/
        },
      ]
      
    },
  
    // 插件
    plugins: [
      // 管理输出， 自动创建 html 并且自动引入 编译之后的 js  需要使用 html-webpack-plugin 插件
      new HtmlWebpackPlugin({
        // 创建的 html 想要用一个模版
        template: './public/index.html'
      }),
      new VueLoaderPlugin()
    ],
  }
}