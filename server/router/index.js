const fs = require('fs')
const Router = require('koa-router')
const router = new Router()
fs.
  readdirSync(__dirname).
  filter(item => item !== 'Guard.js').
  forEach(item => {
    const route = require(`./${item}`)
    router.use(route.routes()).use(route.allowedMethods())
  })

module.exports = router
