// custom-tab-bar/index1.js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/sotore'
Component({
  options: {
    styleIsolation: "shared",
  },
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      sum: 'sum',
      active: 'activeTabBarIndex'
    },
    actions: {
      updateActive: 'updateActiveTabBarIndex'
    }
  },
  observers: {
    'sum': function(val) {
      console.log(val)
      this.setData({
        'list[1].info': val
      })
    },
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
    "list": [
      {
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "/images/tabs/tabbarhome.png",
        "selectedIconPath": "/images/tabs/tabbarhome-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/images/tabs/tabbar.png",
        "selectedIconPath": "/images/tabs/tabbar-active.png",
        "info": 2
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/tabs/contact.png",
        "selectedIconPath": "/images/tabs/contact-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // event.detail 的值为当前选中项的索引
    onChange(event) {
      this.updateActive(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  }
})
