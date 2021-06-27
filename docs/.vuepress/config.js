const merge = require('merge')

const navThemeConfig = require('./theme-config/nav')
const sidebarThemeConfig = require('./theme-config/sidebar')
const blogThemeConfig = require('./theme-config/blog')

const baseConfig = {
  // 标题
  title: '杂文笔记',

  // 描述
  description: '收录日常的学习笔记，杂文博客。',

  // 额外的需要被注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],

  // 语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },

  // 部署站点的基础路径
  base: '/vue-press-notes/',

  // 主题
  theme: 'reco',

  // 主题配置
  themeConfig: {
    record: 'Copyright © 2019-present Huang-An',
    // 项目开始时间
    startYear: '2021',
    // 博客主题类型
    type: 'blog',
    // logo
    logo: '/image/avatar.jpg',
    // 作者
    author: 'Huang-An',
    // 作者头像
    authorAvatar: '/image/avatar.jpg',
    // 启用搜索
    search: true
  }
}

module.exports = merge.recursive(
  baseConfig,
  navThemeConfig,
  sidebarThemeConfig,
  blogThemeConfig
)
