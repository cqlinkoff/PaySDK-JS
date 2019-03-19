import WKBridge from '@cqlinkoff/wk-bridge'
import qs from 'qs'

export default class ChainLongPay {
  constructor () {
    this.bridge = new WKBridge({
      namespace: 'chainLong'
    })
  }

  /**
   * @description pay order
   * @date 2019-03-18
   * @param {string} order order info
   * @return {Promise} pay result
   * @memberof ChainLongPay
   */
  async payOrder (order) {
    if (!order) {
      throw new TypeError('Invalid Order')
    }
    try {
      const res = await this.bridge.postMessage('payOrder', {
        order
      })
      const paidOrder = qs.parse(res)
      return paidOrder
    } catch (err) {
      throw err
    }
  }
}
