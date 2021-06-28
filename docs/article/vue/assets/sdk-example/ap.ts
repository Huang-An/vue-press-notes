// 阿里 SDK 类

export class Ap {
  init = (callback: any) => {
    if (window.AlipayJSBridge) {
      callback && callback()
    } else {
      document.addEventListener('AlipayJSBridgeReady', callback, false)
    }
  }

  // 扫码
  // 统一修改成 Promise 形式，抹平与其他平台 sdk 的差异
  scan = () => {
    return new Promise((resolve, reject) => {
      try {
        this.init(
          window.AlipayJSBridge.call(
            'scan',
            {
              type: 'qr',
            },
            (res: any) => {
              resolve(res.codeContent)
            }
          )
        )
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default new Ap()
