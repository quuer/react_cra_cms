const Router = require('koa-router')
const router = new Router({ prefix: '/api' })
const Mock = require('mockjs')

/*这里列出了所有常用的mock数据属性*/
router.get('/global', (ctx) => {
  ctx.body = {
    status: 200,
    success: true,
    data: Mock.mock( // 反馈给data的内容：上下箭头内的数据
      // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      {
        'list|5-10': [{ // m-n：随机生成m-n个同级数据
          'id|+1': 1, // +n：每次生成的数据自动加n
          //
          bool: '@boolean()', // @boolean()：随机50%概率返回true/false
          bool2: '@boolean(1,9,true)', // boolean(min?,max?,current?): min/(min+max)概率返回current，max//(min+max)概率返回!current
          // 数字
          natural: '@natural(1,9)', // @natural(min,max)：随机min-max内的自然数
          integer: '@integer(1,9)', // @integer(min,max)：随机min-max内的整数。？目前看表现和@natural一样
          float: '@float(1,10,2,2)', // @float(min?,max?,dmin?,dmax?)：随机返回min-max整数并带dmin-dmax位小数的的数字，比如dmin/dmax相同则小数位数固定
          character: '@character',// @character( pool? )：随机字符
          string: '@string(8)', // @string(min,max)：随机min-max个字符串
          range: '@range(1,10)',// 随机整形数组
          // 日期
          data: '@date(yyyy-MM-dd HH:mm:ss)',
          time: '@time(a HH:mm:ss)',
          dateTime: '@datetime',
          now: '@now(month)',
          // 图片
          img: '@image(100x400,#f00)',
          // 颜色
          hex: '@hex',
          rgb: '@rgb',
          rgba: '@rgba',
          hsl: '@hsl',
          // 文本
          paragraph: '@paragraph(1,2)', // 英文句子的个数
          cparagraph: '@cparagraph(1,2)', // 中文句子的个数
          sentence: '@sentence(1,10)',// 英文单词的个数
          csentence: '@csentence(1,10)',// 中文单词的个数
          word: '@word(1,5)',
          cword: '@cword(1,5)',
          title: '@title(1,5)',
          ctitle: '@ctitle(1,5)',
          // 名字
          first: '@first',
          last: '@last',
          name: '@name',
          cfirst: '@cfirst',
          clast: '@clast',
          cname: '@cname',
          // 网络
          url: '@url(http,abc.com)',
          protocol: '@protocol',
          domain: '@domain',
          email2: '@email()',
          ip: '@ip',
          // 地区
          region: '@region',
          province: '@province',
          city: '@city(prefix)', // prefix可选  省 市
          county: '@county(prefix)', // 县 prefix可选 省 市 县
          zip: '@zip', // 邮编
          // 随机id
          uuid: '@guid',
          id2: '@ID', // 18位身份证号
          'pick|1': ['a', 'e', 'i', 'o', 'u'], // 随机选1
          pick1: '@pick([11,22,"quuer","abc","d"])' // 随机选1
        }]
      }
      // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    )
  }
})

module.exports = router
