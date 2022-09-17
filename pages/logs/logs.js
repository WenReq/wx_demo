// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    query: {},
    count: 0,
  },
  onLoad(options) {
    console.log(options)
    this.setData({
      query: options
    })
    console.log(this.data.query)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  gotoBack() {
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 页面相关事件处理函数 -- 监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('触发了下拉刷新')
    this.setData({
      count: this.data.count + 1
    })
    wx.stopPullDownRefresh({
      success: (res) => {
        console.log(res)
      },
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('触发了上拉触底事件')
  },
})
