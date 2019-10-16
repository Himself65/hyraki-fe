module.exports = app => {
  app.get('/goods', (req, res) => {
    if (req.query['brief']) {
      res.json([
        { id: '1', name: '面包', sellingPrice: '' },
        { id: '2', name: '甜筒', sellingPrice: '' },
        { id: '3', name: '圣代', sellingPrice: '' }
      ])
    } else {
      // detail模式
      // 返回详细数据
      res.json([
        {
          id: '1',
          name: '面包',
          barCode: '10086',
          image: 'https://xxx.com/xxx.jpg',
          unit: '个',
          mainClass: '食物',
          subClass: '农副产品',
          forSale: true,
          purchasePrice: '10',
          costPrice: '',
          sellingPrice: '',
          safeStock: 1e3,
          currentStock: 1e5,
          unsalableWarningDays: 5,

          supplier: { id: '1', name: '面包新语' },
          brand: { id: '1', name: '面包新语' },

          remark: '扩散性百万甜面包自己正在被卖'
        },
        {
          id: '2',
          name: '圣代',
          barCode: '10087',
          image: 'https://xxx.com/xxx.jpg',
          unit: '个',
          mainClass: '食物',
          subClass: '肯德基主打产品',
          forSale: false,
          purchasePrice: '10',
          costPrice: '',
          sellingPrice: '',
          safeStock: 1,
          currentStock: 1,
          unsalableWarningDays: 100,

          supplier: { id: '1', name: '面包新语' },
          brand: { id: '1', name: '面包新语' },

          remark: '圣代好吃'
        },
        {
          id: '3',
          name: '甜筒',
          barCode: '10088',
          image: 'https://xxx.com/xxx.jpg',
          unit: '个',
          mainClass: '食物',
          subClass: '肯德基主打产品',
          forSale: true,
          purchasePrice: '10',
          costPrice: '',
          sellingPrice: '',
          safeStock: 1,
          currentStock: 0,
          unsalableWarningDays: 1000,

          supplier: { id: '1', name: '面包新语' },
          brand: { id: '1', name: '面包新语' },

          remark: '甜筒也好吃'
        }
      ])
    }
    res.end()
  })
}
