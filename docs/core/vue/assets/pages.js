const path = require('path')
const glob = require('glob')
const { getWholeModule } = require('./helper')

const resolve = dir => path.join(__dirname, `../../src/pages/${dir}`)

const pages = modules => {
  // 没有传进要打包的页面时，就打包全部页面
  modules = modules.length ? modules : getWholeModule()
  const pages = {}
  modules.forEach(module => {
    pages[module] = {
      entry: resolve(`${module}/entry/index.ts`),
      template: resolve(`${module}/entry/index.html`),
      filename: `${module}/index.html`,
      chunks: ['chunk-vendors', 'chunk-common', module]
    }
  })
  return pages
}

module.exports = pages
