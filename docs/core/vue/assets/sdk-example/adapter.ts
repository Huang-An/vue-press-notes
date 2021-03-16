import web from './web'
import wx, { Wx } from './wx'
import ap, { Ap } from './ap'

// 检查当前应用运行环境
const checkPlatform = (): string => {
  const ua: string = window.navigator.userAgent.toLowerCase()
  const micromessenger: RegExpMatchArray = ua.match(/MicroMessenger/i) || []
  const alipay: RegExpMatchArray = ua.match(/AliPay/i) || []

  if (micromessenger[0] === 'micromessenger') {
    return 'WECHAT'
  }

  if (alipay[0] === 'alipay') {
    return 'ALIPAY'
  }

  return ''
}

export default class Adapter {
  exec() {
    // 获取当前应用运行环境
    const platform: string = checkPlatform()

    // 定义 当前应用运行环境和对应相关 sdk 的映射
    const paltformToSdkMap: { [k: string]: Wx | Ap } = {
      WECHAT: wx,
      ALIPAY: ap,
    }

    // 返回当前应用运行环境对应的sdk，如果没有默认返回 web 端
    return paltformToSdkMap[platform] || web
  }
}
