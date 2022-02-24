// logs.js
// const util = require('../../utils/util.js')
// import { formatTime } from '../../utils/util.js'
import { wxR } from '../../utils/util'

Page({
  data: {
    list: []
  },
  async onLoad() {
    // 发请求
    // wx.request({
    //   url: 'https://cnodejs.org/api/v1/topics', //仅为示例，并非真实的接口地址
    //   method: 'GET',
    //   success (res) {
    //     console.log(res.data)
    //   }
    // })
    const res = await wxR({ url: 'https://cnodejs.org/api/v1/topics'})
    // console.log(res)
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 1000
    })
    this.setData({
      list: res.data
    })
  }
})
