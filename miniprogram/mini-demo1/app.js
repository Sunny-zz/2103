// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(res)
      }
    })
  },
  // 小程序的全局数据   可以当做成 vuex，使用起来比较麻烦
  // 其他页面如何获取  
  // const app = getApp()  先获取整个应用
  // app.globalData 就可以获取到全局数据了

  globalData: {
    userInfo: null,
    login: false
  }
})
