const fs = require('fs')
const path = require('path')
const render = require('json-templater/string')
const vueConfigTemplate = require('../utils/vueConfigTemplate')

// 获取参数
const args = require('minimist')(process.argv.slice(2))
const targets = args._

// 输出文件路径
const OUTPUT_PATH = path.join(__dirname, '../../vue.config.js')

// vue.config.js 模板
const MAIN_TEMPLATE = vueConfigTemplate.MAIN_TEMPLATE

// 生成 vue.config.js 字符串
const code = render(MAIN_TEMPLATE, {
  modules: JSON.stringify(targets)
})

// 输出文件
fs.writeFileSync(OUTPUT_PATH, code)
