const path = require('path')
const glob = require('glob')

const resolve = dir => path.join(__dirname, `../../src/pages/${dir}`)

// 获取全部模块名
module.exports.getWholeModule = () => {
  // 查找所有 src/pages/*/entry/index.ts
  return glob.sync(resolve('*/entry/index.ts')).map(filePath => {
    const fileMetaList = filePath.split('/')
    return fileMetaList[fileMetaList.length - 3]
  })
}
