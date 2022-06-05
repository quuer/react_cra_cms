const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {  // 遇到/api开头的请求，触发此代理配置
      changeOrigin: true, // 变更请求域名
      target: 'http://localhost:9000', // 将请求转发到此域名下
      pathRewrite: {
        '^/api': '' // 将请求路径中的/api去掉
      }
    })
  )
}
