// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    info: 'init data',
    msgList: [{msg: 'hello'}, {msg: 'world'}],
    imgSrc: 'http://www.itheima.com/images/logo.png',
    randomNum: Math.random() * 10, // 生成10以内的随机数
    randomNum1: Math.random().toFixed(2),
    msg: '你好，',
    type: 0,
    condition: false,
    array: ['zs', 'ls'],
    userlist: [
      { id: 1, name: '小红' },
      { id: 2, name: '小黄' },
      { id: 3, name: '小白' },
    ],
  },
  // 事件参数
  btnTapHandler(e) { // 按钮的 tap 事件处理函数
    console.log(e); // 事件参数对象 e
  },
  // 事件给数据赋值
  changeCount() {
    this.setData({
      count: this.data.count + 1
    })
  },
  // 事件传参
  btnHandler(e) {
    console.log(e.target.dataset.info)
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },
  // input 事件
  inputHandler(e) {
    console.log(e.detail.value)
  },
  // 文本框内容改变的事件
  iptHandler(e) {
    this.setData({
      // 通过 e.detail.value 获取到文本框最新的值
      msg: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})