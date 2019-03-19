# PaySDK-JS

ChainLongPay SDK for Javascript

## Install

```bash
npm i @cqlinkoff/pay-sdk
```

## Use

```js
import ChainLongPay from '@cqlinkoff/pay-sdk'

// pay order

const chainLongPay = new ChainLongPay()
chainLongPay.payOrder(orderInfo)
```

## API

### Pay Order

- arguments:
  - `orderInfo`:
    - type: `string`
    - description: data from `PrePay`
- return:
  - `res`:
    - type: `Promise`
    - description: pay order result
- throw:
  - `Invalid Order`: invalid order info
- example:

```javascript
import ChainLongPay from '@cqlinkoff/pay-sdk'

const chainLongPay = new ChainLongPay()

const order = 'amount=0.01&channel=8266164582560&coinId=34190899187000&industry=图书杂志,&merchantId=8266163269740&merchantName=qianlong-pay&orginAmount=10000000000000000&payBillNo=312966740919713793&refBizNo=1552546684145&toAddr=0xce539b5c354e679232cef04801739b32cb37e61b&sign=jAWE+YU0uIDsZLQEtOBJ2KQUY1wl1XOKC8mpWI0VmH36GaJXIyJMOpCyLY/Zgb49uIMYG8aJeJ6Ofek0/S/ee1QC/0IPfmI4LnI9jU+63AhpH3G/O93xI3qW3elANulcaa26QwB9B3q2lQklT0Pak+rO1CEUmV4yZjIC4JsAaxZqBfEBzjE19R2/2qpKIn0VhdfrrINNO+ITCgMzSZaOOqPRJzPcQTiHqVQt0znirTEjhR/iL+2FgTltnlGp/Ez/5nLnV0sI3xtYZcjmB5JPCnK114ozLTXHzNNxVBNZQ3NUr5EVIg11YKIp81TOyyY9vfMm/2krhE4FFFVElUL4lA=='

chainLongPay.payOrder(order)
```
