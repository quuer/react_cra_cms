/*根据 antd 的 column 生成 exceljs 的 column
* params: {array}: antd table的标头列
* */
const DEFAULT_COLUMN_WIDTH = 15

export function generateHeaders(columns) {
  return columns?.map(col => {
    return {
      // 显示的 name
      header: col.title,
      // 用于数据匹配的 key
      key: col.dataIndex,
      // 列宽
      width: col.width || DEFAULT_COLUMN_WIDTH
    }
  })
}

// 获取数据类型
export function getDataType(data) {
  return (Object.prototype.toString.call(data).match(/\s(\w+)\]/))[1]
}
