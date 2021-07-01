module.exports = {
  themeConfig: {
    // 自动形成侧边导航
    subSidebar: 'auto',

    sidebarDepth: 2,

    sidebar: {
      '/article/babel/': [
        {
          title: 'Babel',
          collapsable: false,
          children: ['', '01', '02', '03']
        }
      ],
      '/article/webpack/': [
        {
          title: 'webpack',
          collapsable: false,
          children: ['', '01']
        }
      ],
      '/article/javascript/': [
        {
          title: 'javascript',
          collapsable: false,
          children: ['', '01', '02', '03']
        }
      ],
      '/article/vue/': [
        {
          title: 'Vue.js',
          collapsable: false,
          children: ['', '01', '02', '03']
        }
      ],
      '/article/network/': [
        {
          title: '网络通信',
          collapsable: false,
          children: ['', '01']
        }
      ]
    }
  }
}
