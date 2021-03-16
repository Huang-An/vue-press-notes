import Adapter from './adapter'
import { Wx } from './wx'
import { Ap } from './ap'
import { Web } from './web'

class Sdk {
  constructor() {
    this.adapter = new Adapter().exec()
  }

  adapter!: Wx | Ap | Web

  // 扫码
  scan() {
    if (this.adapter) {
      return this.adapter.scan()
    }
  }
}

export const sdk = new Sdk()

export default {
  install(Vue: Vue.VueConstructor) {
    Vue.prototype.$sdk = sdk
  },
}
