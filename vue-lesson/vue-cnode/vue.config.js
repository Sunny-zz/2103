module.exports = {
  // 在开发(run serve)和生产(run build)的时候切换公共地址 publicPath
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cnode1/'
    : '/'
}

// 部署项目的时候 如果服务器是一级地址没有路径的 
// 服务器是二级地址的 hash 默认可以用  history 默认不用需要像上面设置 publishpath