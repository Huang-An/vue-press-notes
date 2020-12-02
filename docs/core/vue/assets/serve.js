const execa = require('execa')

// 获取参数
const args = require('minimist')(process.argv.slice(2))
const targets = args._

// 生成vue.config.js
const renderVueConfig = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // 执行 shell 命令 node scripts/task/vueConfigRender.js [参数]
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

// 运行
const serveTask = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // 执行 shell 命令 vue-cli-service serve
      await execa('vue-cli-service', ['serve'], { stdio: 'inherit' })
      console.log('启动服务成功')
      resolve()
    } catch (error) {
      console.log(error)
      console.log('启动服务失败~')
      reject(error)
    }
  })
}

const runTask = async () => {
  // 先执行生成 vue-config.js
  await renderVueConfig()
  // 再执行生成 vue-cli-service serve
  await serveTask()
}

runTask()
