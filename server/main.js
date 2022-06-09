const Koa = require('koa')
const app = new Koa()
const koaStatic = require('koa-static')
const koaBody = require('koa-body')
const router = require('./router/index')
const path = require('path')

// 文件上传
app.use(koaBody({
    multipart: true // 支持文件上传
  })
)
// 静态文件显示
app.use(koaStatic(path.resolve(__dirname, './public')))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('服务器已启动 http://127.0.0.1:3000')
})
