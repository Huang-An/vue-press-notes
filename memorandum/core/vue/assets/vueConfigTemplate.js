module.exports = {
  MAIN_TEMPLATE: `
const pages = require('./scripts/utils/pages.js')

module.exports = {
  parallel: false,

  devServer: {
    host: '0.0.0.0'
  },

  pages: pages({{modules}}),

  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
}
`
}
