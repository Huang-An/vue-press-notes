interface wsResult<T = any> {
  msgType: string
  msg: string
  data: T
}

export class WsEvent {
  static instance: WsEvent

  static getInstance() {
    if (!WsEvent.instance) {
      WsEvent.instance = new WsEvent()
    }
    return WsEvent.instance
  }

  /**
   * 事件回调队列 多个时会循环执行
   */
  private eventQueueMap: {
    [k: string]: Array<{
      // 额外参数
      param: any
      // 事件
      event: (data: wsResult, ...args: any) => void
    }>
  } = {}

  /**
   * 事件队列添加事件
   * @param key 事件名称
   * @param event 事件
   * @param param 额外参数
   */
  $on(key: string, event: (data: wsResult, ...args: any) => void, param?: any) {
    if (!this.eventQueueMap[key]) this.eventQueueMap[key] = []

    this.eventQueueMap[key].push({
      event: event,
      param: param
    })
  }

  /**
   * 从事件队列中删除事件
   * @param key 事件名称
   * @param event 事件
   */
  $off(key: string, event: Function) {
    const eventQueue = this.eventQueueMap[key]

    if (eventQueue) {
      for (let i = eventQueue.length - 1; i >= 0; i--) {
        if (eventQueue[i].event === event) {
          eventQueue.splice(i, 1)
        }
      }
    }
  }

  /**
   * 执行事件队列
   */
  $exec(evt: MessageEvent) {
    try {
      const result: wsResult = JSON.parse(evt.data)
      const { msgType } = result
      const eventQueueKeys = Object.keys(this.eventQueueMap).filter(key => key === msgType)
      // 执行指定类型事件
      eventQueueKeys.forEach(key => {
        const eventMap = this.eventQueueMap[key]
        eventMap.forEach(events => {
          events.event(result, events.param)
        })
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export default WsEvent.getInstance()
