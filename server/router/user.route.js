const Router = require('koa-router')
const Mock = require('mockjs')
const router = new Router({ prefix: `/koa/user` })

router.post('/query', (ctx) => {
  ctx.body = {
    status: 200,
    success: true,
    data: Mock.mock(
      {
        'userlist|10': [
          {
            'index|+1': 1,
            uid: '@guid',
            name: '@cname',
            age: '@natural(20,40)',
            region: '@county(prefix)',
            tel: /^1[3456789]\d{2}\*{3}\d{4}/,
            description: '@cparagraph(2,3)'
          }]
      }
    )
  }
})
module.exports = router
