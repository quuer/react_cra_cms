const Router = require('koa-router')
const { uploadFile } = require('../controller/upload.controller')
const router = new Router({ prefix: `/koa/file` })

// 文件上传
router.post('/upload', uploadFile)

module.exports = router

