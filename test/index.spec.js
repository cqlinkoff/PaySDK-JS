import ChainLongPay from '../src'

beforeAll(() => {
  window.chainLong = {
    payOrder: (arg) => {
      const { id, data } = JSON.parse(arg)
      window.executeCallback(id, null, data)
    }
  }
})

describe('ChainLongPay', () => {
  test('create correct instance', () => {
    const chainLongPay = new ChainLongPay()

    expect(chainLongPay).toBeInstanceOf(ChainLongPay)
    expect(typeof chainLongPay.payOrder).toBe('function')
  })

  test('payOrder', () => {
    const chainLongPay = new ChainLongPay()
    const res = chainLongPay.payOrder('xxxxx')

    expect(res).toBeInstanceOf(Promise)
  })

  test('invalid order for payOrder', () => {
    const chainLongPay = new ChainLongPay()
    expect(chainLongPay.payOrder).toThrow('Invalid Order')
  })
})
