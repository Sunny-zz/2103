// pages/demo2/demo2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numbers: [1, 2, 3, 4, 5],
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新触发')
    // 内层函数必须写成箭头函数才能使用 this
    setTimeout(() => {
      this.setData({
        numbers: this.data.numbers.slice(0).reverse()
      })
      // 关闭下拉
      wx.stopPullDownRefresh()
    }, 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('上拉触底了')
    this.setData({
      loading: true
    })
    const lastItem = this.data.list[this.data.list.length - 1]
    setTimeout(() => {
      this.setData({
        list: [...this.data.list, lastItem + 1, lastItem + 2, lastItem + 3, lastItem + 4, lastItem + 5],
        loading: false
      })
    }, 1000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})