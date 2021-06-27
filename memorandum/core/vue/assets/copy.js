const glob = require('glob')
const fse = require('fs-extra')
const { getWholeModule, copy } = require('../utils/helper')

// 获取参数
const args = require('minimist')(process.argv.slice(2))
const targets = args._
const modules = targets.length ? targets : getWholeModule()

const copyTask = async () => {
  while (modules.length > 0) {
    let module = modules.pop()
    copyJs(module)
    copyCss(module)
    copyImg(module)
  }
}

const copyJs = async module => {
  try {
    // 将 dist/js/[module].xxxx.js 拷贝到 dist/[module]/js
    await copy(`./dist/js/${module}.*`, `./dist/${module}/js`)
    // 公共部分全拷贝
    await copy(`./dist/js/chunk-vendors.*`, `./dist/${module}/js`)
    await copy(`./dist/js/chunk-common.*`, `./dist/${module}/js`)
  } catch (error) {
    console.log(error)
  }
}

const copyCss = async module => {
  try {
    // 将 dist/css/[module].xxxx.css 拷贝到 dist/[module]/css
    await copy(`./dist/css/${module}.*`, `./dist/${module}/css`)
    // 公共部分全拷贝
    await copy(`./dist/css/chunk-vendors.*`, `./dist/${module}/css`)
    await copy(`./dist/css/chunk-common.*`, `./dist/${module}/css`)
  } catch (error) {
    console.log(error)
  }
}

const copyImg = async module => {
  try {
    // 将 dist/img/[module].xxxx.png 拷贝到 dist/[module]/img
    // await copy(`./dist/img/${module}.*`, `./dist/${module}/img`)

    await copy(`./dist/img/*`, `./dist/${module}/img`)
  } catch (error) {
    console.log(error)
  }
}

copyTask()
