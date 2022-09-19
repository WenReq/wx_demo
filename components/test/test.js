// components/test/test.js
Component({
  options: {
    // apply-shared 全局样式影响组件样式
    // shared 组件影响全局，全局也影响组件
    styleIsolation: "shared"
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      this.setData({ count: this.data.count + 1 })
      this._showCount()
    },
    _showCount() { // 自定义方法建议以 _ 开头
      wx.showToast({
        title: 'count值为：' + this.data.count,
        icon: 'none'
      })
    }
  }
})
