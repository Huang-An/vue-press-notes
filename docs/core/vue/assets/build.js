const execa = require('execa')

// 获取参数
const args = require('minimist')(process.argv.slice(2))
const targets = args._

// 生成vue.config.js
const renderVueConfig = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await execa('node', ['scripts/task/vueConfigRender.js'].concat(targets), { stdio: 'inherit' })
      console.log('生成vue.config.js成功, 开始执行打包~')
      resolve()
    } catch (error) {
      console.log(error)
      console.log('生成vue.config.js失败')
      reject(error)
    }
  })
}

// 打包
const buildTask = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await execa('vue-cli-service', ['build'], { stdio: 'inherit' })
      console.log('打包成功, 开始拷贝所需文件~')
      resolve()
    } catch (error) {
      console.log(error)
      console.log('打包失败~')
      reject(error)
    }
  })
}

const runTask = async () => {
  await renderVueConfig()
  await buildTask()
}

runTask()
