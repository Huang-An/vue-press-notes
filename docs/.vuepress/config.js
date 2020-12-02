module.exports = {
  base: '/vue-press-notes/',
  title: '学习随笔',
  description: '可能会不定时更新的前端学习笔记',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '笔记',
        items: [
          { text: 'HTML和CSS', link: '/core/html-css/01' },
          { text: 'JavaScript', link: '/core/js/01' },
          { text: 'VUE', link: '/core/vue/01' },
          { text: '其他', link: '/core/other/01' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/Huang-An/' }
    ],
    sidebar: {
      '/core/': [
        ['/core/', '前言'],
        {
          title: 'HTML和CSS',
          children: ['/core/html-css/01', '/core/html-css/02']
        },
        {
          title: 'JavaScript',
          children: ['/core/js/01', '/core/js/02', '/core/js/03', '/core/js/04', '/core/js/05']
        },
        {
          title: 'VUE',
          children: ['/core/vue/01']
        },
        {
          title: '其他',
          children: ['/core/other/01']
        }
      ]
    }
  }
}
