// 微信 SDK 类

export class Wx {
  init = (callback: any) => {
    window.wx.ready(() => {
      callback && callback()
    })
  }

  // 扫码
  // 统一修改成 Promise 形式，抹平与其他平台 sdk 的差异
  scan = () => {
    return new Promise(async (resolve, reject) => {
      this.init(
        window.wx.scanQRCode({
          needResult: 1,
          scanType: ['qrCode', 'barCode'],
          success(res: any) {
            resolve(res.resultStr)
          },
          fail(error: any) {
            reject(error)
          },
        })
      )
    })
  }
}

export default new Wx()
