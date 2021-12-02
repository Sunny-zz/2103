// 因为使用的是 vuecli 搭建的环境，所以在项目根目录新建 vue.config.js 可以对 vuecli 的配置进行修改
// 其实我们 vue 部署的时候 我们就使用了， 这个配置文件修改了 publicPath 
module.exports = {
  // devServer  开发服务器，其实就是我们的 localhost:8080  服务器
  // 跨域问题  localhost:8080   ---->  localhost:3008 发请求出现的跨域
  // 使用代理将 localhost:8080 发的请求都代理成 localhost:3008
  devServer: {
    proxy: {
      //   '/api'  要被代理的字符串   当请求中出现 /api 的时候就会启用  /api 这个代理设置
      '/api': {
        // 目标服务器
        target: 'http://localhost:3008',
        // 替换来源为 target
        changeOrigin: true,
        // 路径重写    /api   --->  http://localhost:3008
        pathRewrite: {     
          '^/api': ''   
        }
      }
    }
  }
}