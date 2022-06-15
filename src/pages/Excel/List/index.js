import { Button, Space, Table, Tag } from 'antd'
import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import * as ExcelJs from 'exceljs'
import { useNavigate } from 'react-router'
import { generateHeaders } from '../../../utils/fn'
import { getUserData } from '../../../service/user'
import { connect } from 'react-redux'

const Component = () => {
  const columns = [
    {
      title: '序列',
      dataIndex: 'index',
      align: 'center'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      align: 'center'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      align: 'center'
    },
    {
      title: '籍贯',
      dataIndex: 'region',
      align: 'center'
    },
    {
      title: '手机',
      dataIndex: 'tel',
      align: 'center'
    },
    {
      title: '描述',
      dataIndex: 'description',
      align: 'center'
    },
    {
      title: '操作',
      dataIndex: 'uid',
      align: 'center',
      render: (text) => {
        return (
          <>
            <Tag color="#108ee9" onClick={() => {

              navigate(`/components/excel/detail/${text}`)

              // navigate(`/components/excel/excel?uid=${text}`)
            }}><a>详情</a></Tag>
            <Tag color="#2db7f5" onClick={() => {
              navigate(`/components/excel/edit/${text}`)
            }}><a>修改</a></Tag>
          </>
        )
      }
    }
  ]
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const onGetUserData = async () => {
    const res = await getUserData()
    const { userlist } = res.data
    setData(userlist)
  }

  const onExportExcel = () => {
    // 创建工作簿
    const workbook = new ExcelJs.Workbook()
    // 添加sheet
    const worksheet = workbook.addWorksheet('demo sheet')
    // 设置 sheet 的默认行高
    worksheet.properties.defaultRowHeight = 20
    // 设置列
    worksheet.columns = generateHeaders(columns)
    // 添加行并导出选中项
    const selectedRowData = data.filter(item => selectedRowKeys.includes(item.uid))
    worksheet.addRows(selectedRowData)
    // 导出excel
    workbook.xlsx.writeBuffer().then((data => {
      const blob = new Blob([data], { type: '' })
      saveAs(blob, '用户数据.xlsx')
    }))

  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: '选择奇数行',
        onSelect: (changableRowKeys) => {
          let  newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            return index % 2 === 0;

          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      },
      {
        key: 'even',
        text: '选择偶数行',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            return index % 2 !== 0;
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      }
    ]
  }
  return (
    <>
      <Space>
        <Button type="primary" onClick={onGetUserData}>获取随机数据</Button>
        <Button type="primary" onClick={onExportExcel} disabled={selectedRowKeys.length === 0}>导出勾选项</Button>
      </Space>
      <div style={{ height: 15 }}></div>
      <Table rowSelection={rowSelection}
             columns={columns} dataSource={data}
             rowKey={record => record.uid} />
    </>
  )
}

const mapState = ({ global }) => global
const mapDispatch = dispatch => ({ dispatch })

export default connect(mapState, mapDispatch)(Component)
