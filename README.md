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

chainLongPay.payOrder('order info')
```
