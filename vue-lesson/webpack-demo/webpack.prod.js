// 生产环境的 webpack 配置
const common = require('./webpack.common')
const path = require('path')
const { merge } = require('webpack-merge')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
module.exports = merge(common, {
  // 生产的配置

  output: {
    filename: 'js/boundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 每次编译先删除 dist 文件夹 内的内容
    clean: true
  },

  // 模式
  mode: 'production',

  // 开发工具   资源映射
  devtool: 'source-map',

  module: {
    rules: [
      // css 模块
      // 当写样式的时候有些 css3 的样式需要添加浏览器厂商前缀，手动添加太麻烦，我们可以借助 postcss-loader 帮助我们自动添加
      
      // 生产环境下的 css 需要特殊压缩，以及 css 文件分离
      // 需要安装两个包
      // mini-css-extract-plugin 插件  分离
      // css-minimizer-webpack-plugin  压缩  webpack 优化用到的插件

      {
        // 文件类型检测 满足 test 检测的才使用对应的的规则
        test: /\.css$/i,
        // 使用哪些包处理这个文件
        use: [
          miniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      //  less
      {
        test: /\.less$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
      },

      // image
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // 对于 webpack 5 来说可以直接将模块设置成 资源模块， 使用 type ，无需下载对应的加载器来处理模块
        // 资源模块的种类参考官方文档
        type: 'asset/resource',
        // 将资源分离到对应的目录
        generator: {
          //  ext 文件后缀   name 是原来的名字    hash 优化处理
          filename: 'img/[name][hash][ext]'
        }
      },
      // font
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          //  ext 文件后缀   name 是原来的名字    hash 优化处理
          filename: 'fonts/[name][hash][ext]'
        }
      },
      
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      // 分离的 css 名
      filename: "css/[name].css",
      chunkFilename: "[id].css",
    })
  ],
  // webpack 优化配置
  optimization: {
    // 压缩的优化
    minimizer:  [
      // ...是之前的默认优化
      '...',
      // css 压缩优化  适用于生产环境
      new cssMinimizerWebpackPlugin()
    ]
  }
})
