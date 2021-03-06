// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 100,
    message: 'hello 小程序',
    className: 'box',
    show: false,
    array: [1,2,3,4,5,6,7]
  },

  // 在对象内创建的任意方法都可以被当作事件函数来使用
  // 在函数内获取 data 数据使用 
  sub(){
    // console.log(e)
    // 修改 count
    this.setData({
      count: this.data.count - 1
    })
  },
  add(){
    // console.log('我是一个 add 函数')
    this.setData({
      count: this.data.count + 1
    })
  },
  // 事件传参，需要借助事件对象下的 dataset 属性来间接的实现事件传参
  change(e){
    // console.log(e)
    this.setData({
      count: e.currentTarget.dataset.count
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})