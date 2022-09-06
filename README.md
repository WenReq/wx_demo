# 项目结构

```
├── README.MD -- 项目描述
├── app.js  -- 入口文件
├── app.json  -- 全局配置文件
├── app.wxss  -- 全局样式文件
├── pages -- 存放所有的页面
│   ├── index -- 每个页面由 4 个基本文件组成，它们分别是：
│   │   ├── index.js  -- 1. .js 文件（页面的脚本文件，存放页面的数据、事件处理函数等）
│   │   ├── index.json  -- 2. .json 文件（当前页面的配置文件，配置窗口的外观、表现等）
│   │   ├── index.wxml  -- 3. .wxml 文件（页面的模版结构文件）
│   │   └── index.wxss  -- 4. .wxss 文件（当前页面的样式文件）
│   └── logs
│       ├── logs.js
│       ├── logs.json
│       ├── logs.wxml
│       └── logs.wxss
├── project.config.json -- 项目的配置文件
├── project.private.config.json -- 项目私有配置文件
├── sitemap.json  -- 用来配置小程序及其页面是否允许被微信索引
└── utils -- 用来存放工具性质的模块
    └── util.js -- 例如：格式化时间的自定义模块
```

# 01. 小程序起步

## JSON 配置文件

1. app.json（`pages`所有页面路径、`window`窗口外观、`style`界面表现、底部`tab`等）
2. project.config.json 用来记录我们**对小程序开发工具所做的个性化配置**。
  - `setting` 中保存了**编译**相关的配置
  - `projectname` 中保存的是**项目名称**
  - `appid` 中保存的是小程序的**账号 ID**
3. sitemap.json 文件。

  微信现在已开放**小程序内搜索**，效果类似于 PC 网页的 SEO。sitemap.json 文件用来**配置小程序页面是否允许微信索引**。
  
  当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索关键字和页面的索引匹配的时候，小程序的页面将可能展示在搜索结果中。

  注意：sitemap 的索引提示是默认开启的，如需要关闭 sitemap 的索引提示，可在小程序配置文件 `project.config.json` 的 `setting` 中配置 `checkSiteMap` 为 `false`。

4. 页面 .json 配置文件

  小程序中的每一个页面，可以使用 .json 文件来对本页面的窗口外观进行配置，**页面中的配置项会覆盖 app.json 的 window 中相同的配置项。**

## 小程序代码的构成

### wxml 模版

WXML (WeiXin Markup Language) 是小程序框架设计的一套**标签语言**，用来构建小程序页面的结构，起作用类似于网页开发中的 HTML。

1. 标签名称不同
  - HTML(div, span, img, a)
  - WXML(view, text, image, navigator)

2. 属性节点不同
  - `<a href="#">超链接</a>`
  - `<navigator url="/pages/home/home">超链接</navigator>`

3. 提供了类似于 Vue 中的模版语法
  - 数据绑定
  - 列表渲染
  - 条件渲染

### WXSS 样式

WXSS(WeiXin Style Sheets)是一套**样式语言**，用于描述 WXML 的组件样式，类似于网页开发中的 CSS。

1. 新增 rpx 尺寸单位
  - CSS 中需要手动进行像素单位换算，例如 rem
  - WXSS 在底层支持新的尺寸单位 rpx，在不同大小的屏幕上小程序会自动换算
  
2. 提供了全局的样式和局部样式
  - 项目根目录中的 app.wxss 会作用于所有小程序页面
  - 局部页面的 .wxss 样式仅对当前页面生效

3. WXSS 仅支持部分 CSS 选择器
  - .class 和 #id
  - element
  - 并集选择器、后代选择器
  - ::after 和 ::before 等伪类选择器

### JS 逻辑交互

一个项目仅仅提供界面展示是不够的，在小程序中，我们通过 .js 文件处理用户的操作。例如：响应用户的点击、获取用户的位置等等。

小程序中的 JS 文件分为三大类，分别是：

1. app.js（是整个小程序**项目的入口文件**，通过调用 `App()` 函数来启动整个小程序）
2. 页面的 .js 文件（是**页面的入口文件**，通过调用 `Page()` 函数来创建并运行页面）
3. 普通 .js 文件（是普通的**功能模块文件**，用来封装公共的函数或属性页面使用）

## 小程序的宿主环境

宿主环境（host environment）指的是**程序运行所必须的依赖环境**。例如：Android 系统和 IOS 系统是两个不同的宿主环境。安卓版的微信 App 是不能再 IOS 环境下运行的，所以，Android 是安卓软件的宿主环境，脱离了宿主环境的软件是没有任何意义的。

**手机微信**是小程序的宿主环境。小程序借助宿主环境提供的能力，可以完成许多网页无法完成的功能，例如：微信扫码、微信支付、微信登录、地理定位、etc...

### 小程序宿主环境包含的内容

1. 通信模型
2. 运行机制
3. 组件
4. API

### 通信模型

1. 通信的主体

  小程序中通信的主体是**渲染层**和**逻辑层**，其中：

    1. WXML 模版和 WXSS 样式工作在渲染层。
    2. JS 脚本工作在逻辑层。

2. 小程序的通信模型

  小程序的通信模型分为两部分：

    1. **渲染层**和**逻辑层**之间的通信（由微信客户端进行转发）
    2. **逻辑层**和**第三方服务器**之间的通信（由微信客户端进行转发）

### 运行机制

1. 小程序启动的过程

  - 把小程序的代码下载到本地
  - 解析 app.json 全局配置文件
  - 执行 app.js 小程序入口文件，**调用 `App()` 创建小程序实例**
  - 渲染小程序首页
  - 小程序启动完成

2. 小程序页面渲染的过程

  - 加载解析页面的 .json 配置文件
  - 加载页面的 .wxml 模版和 .wxss 样式
  - 执行页面的 .js 文件，**调用 `Page()` 创建页面实例**
  - 页面渲染完成

### 组件

1. 小程序中组件的分类

  **小程序中的组件也是有宿主环境提供的**，开发者可以基于组件快速搭建出漂亮的页面结构。官方把小程序的组件分为 9 大类，分别是：

    - 试图容器（view、text、scroll-view、swiper、swiper-item）
    - 基础内容（button、image）
    - 表单组件
    - 导航组件
    - 媒体组件
    - map 地图组件
    - canvas 画布组件
    - 开放能力
    - 无障碍访问

### API

1. 事件监听 API

  - 特点：以 `on` 开头，用来监听某些事件的触发。
  - 举例：`wx.onWindowResize(function callback)` 监听窗口尺寸变化的事件

2. 同步 API

  - 特点1：以 `Sync` 结尾的 API 都是同步 API。
  - 特点2：同步 API 的执行结果，可以通过函数返回值直接获取，如果执行出错会抛出异常。
  - 举例：`wx.setStorageSync('key', 'value')` 向本地存储中写入内容。

3. 异步 API

  - 特点：类似于 jQuery 中 $.ajax(options) 函数，需要通过 success、fail、complete 接收会用的结果
  - 举例：`wx.request()` 发起网络数据请求，通过 success 回调函数接收数据

### 小程序码

设置 -> 基本设置 -> 基本信息 -> 小程序码及线下物料下载

## 总结

1. 能够知道如何创建小程序
  
  - 微信开发者工具的使用、AppId的获取

2. 能够清楚小程序项目的基本组成结构

  - app.js、app.json、app.wxss、pages文件夹

3. 能够知道小程序页面由几部分组成

  - wxml、wxss、json、js

4. 能够知道小程序中常见的组件如何使用

  - view、text、image

5. 能够知道小程序如何进行协同开发和发布

  - 成员管理、发布小程序、查看运营数据

# 02. 模版与配置

## WXML 模版语法

### 数据绑定

```js
Page({
  data: {
    info: 'init data',
    msgList: [{msg: 'hello', {msg: 'world'}}],
    imgSrc: 'http://www.itheima.com/images/logo.png',
    randomNum: Math.random() * 10, // 生成10以内的随机数
  }
})
```

```html
<!-- 插值变量 -->
<view>{{ info }}</view>
<!-- 列表渲染 wx:for -->
<view wx:for="{{msgList}}" wx:key="unique">{{index}}：{{ item.msg }}</view>
<!-- 动态绑定属性 -->
<image src="{{imgSrc}}" mode="widthFix"></image>
<!-- 三元运算 -->
<view>{{ randomNum >= 5 ? '随机数字大于或等于5' : '随机数小于5' }}</view>
<view>{{ randomNum1 * 100 }}</view>
```

### 事件绑定

事件是渲染层到逻辑层的通讯方式。通过事件可以将用户在渲染层产生的行为，反馈到逻辑层进行业务的处理。

- `tap`: `bindtap` 或 `bind:tap`。手指触摸后马上离开，类似于 `click` 事件。
- `input`: `bindinput` 或 `bind:input`。文本框的输入事件。
- `change`: `bingchange` 或 `bind:change`。状态改变时触发。

事件对象的属性列表

当事件回调触发的时候，会收到一个事件对象 event。它的详情属性如下表所示：

属性|类型|说明
--- | :--: | ---:
type|String|事件类型
timeStamp|Integer|页面打开到触发事件所经历的毫秒数
target|Object|触发事件的组件的一些属性值集合
currentTarget|Object|当前组件的一些属性值集合
detail|Object|额外的信息
touches|Array|触摸事件，当前停留在屏幕中的触摸点信息的数组
changedTouches|Array|触摸事件，当前变化的触摸点信息的数组

## WXSS 模版样式

## 全局配置

## 页面配置

## 网络数据请求

## 案例 - 本地生活（首页）
