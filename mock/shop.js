const app = require('./server')

app.get('/shop', (req, res) => {
  res.json([
    { id: 1, name: '面包店' },
    { id: 2, name: '超市' }
  ])
  res.end()
})

app.get('/shop/serve', (req, res) => {
  // 根据 query 中的 id 决定返回内容
  // '/shop/serve?id=10086'
  // 则查找店铺名称10086的服务（或者说商品）
  res.json([
    { id: '1', name: '面包', price: 10 },
    { id: '3', name: '甜筒', price: 20 },
    { id: '2', name: '圣代', price: 30 }
  ])
  res.end()
})
