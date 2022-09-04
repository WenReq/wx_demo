## 项目结构

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
