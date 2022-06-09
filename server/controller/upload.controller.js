const fs = require('fs')
const path = require('path')
class UploadController {

  // 上传文件
  async uploadFile(ctx, next) {
    console.log('请求上传')
    const file = ctx.request.files.file
    const basename = path.basename(file.filepath)
    // 读取文件流
    const fileReader = fs.createReadStream(file.filepath)
    const filePath = path.join(__dirname, '../public/upload')

    // 组装成绝对路径
    const fileResource = filePath + `/${basename}.png`

    // 使用 createWriteStream 写入数据，然后使用管道流pipe拼接
    const writeStream = fs.createWriteStream(fileResource)

    // 判断 /upload/upload 文件夹是否存在，如果不存在的话就创建一个
    if (!fs.existsSync(filePath)) {
      console.log(fs.existsSync(filePath), '◀◀◀fs.existsSync(filePath)')
      fs.mkdir(filePath, (err) => {
        if (err) {
          throw new Error(err)
        }
        else {
          fileReader.pipe(writeStream)
          ctx.body = {
            url: `${ctx.origin}/public/upload/${basename}.png`,
            code: 0,
            message: '上传成功'
          }
        }
      })
    }
    else {
      fileReader.pipe(writeStream)
      ctx.body = {
        url: `${ctx.origin}/public/upload/${basename}.png`,
        code: 0,
        message: '上传成功'
      }
    }
  }
}

module.exports = new UploadController()
