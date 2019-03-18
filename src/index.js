import WKBridge from '@cqlinkoff/wk-bridge'

export default class ChainLongPay {
  constructor () {
    this.bridge = new WKBridge({
      namespace: 'chainLong'
    })
  }

  /**
   * @description pay order
   * @date 2019-03-18
   * @param {string} order
   * @memberof ChainLongPay
   */
  payOrder (order) {
    if (!order) {
      throw new TypeError('Invalid Order')
    }
    return this.bridge.postMessage('payOrder', {
      order
    })
  }
}
