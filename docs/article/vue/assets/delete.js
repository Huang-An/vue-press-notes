const fs = require('fs-extra')

const deteleTask = async () => {
  await fs.remove('./dist/css')
  await fs.remove('./dist/js')
  await fs.remove('./dist/img')
  await fs.remove('./dist/share')
}

deteleTask()
