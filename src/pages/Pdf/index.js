import React, { useState } from 'react'
import { Button, message, Space } from 'antd'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import testPdf from './test.pdf'
import styles from './index.less'

const Component = () => {
  const [numPages, setNumPages] = useState(0) // 总页数：分页下载
  const [pageNumber, setPageNumber] = useState(1) // 当前页
  const [isPdfLoading, setPdfLoading] = useState(false)

  const [sNumPages, setSNumPages] = useState(0) // 总页数：全部下载
  const [isSPdfLoading, setSPdfLoading] = useState(false)
  // pdf加载成功
  const onLoadSuccess = ({ numPages }) => {
    // 读取并保存总页数
    setNumPages(numPages)
  }
  const onAllLoadSuccess = ({ numPages }) => {
    // 读取并保存总页数
    setSNumPages(numPages)
  }
  return (
    <div className={styles.container_pdf}>
      <div className={styles.left}>
        <Space>
          <Button type="primary" onClick={() => {
            setPageNumber(1)
            setPdfLoading(!isPdfLoading)
          }}>
            {isPdfLoading ? '重置' : '加载pdf(分页)'}
          </Button>
          <Button
            disabled={!isPdfLoading}
            onClick={() => {
              if (pageNumber < numPages) {
                return setPageNumber(pageNumber + 1)
              }
              message.warning('已是最后一页')
            }}>
            下一页
          </Button>
        </Space>
        {
          isPdfLoading ?
            <div className={styles.content}>
              <p>Page {pageNumber} of {numPages}</p>
              <Document
                loading=""
                file={testPdf}
                onLoadSuccess={onLoadSuccess}>
                <Page
                  pageNumber={pageNumber}
                  width={700}
                />
              </Document>
            </div>
            : null
        }
      </div>
      <div className={styles.right}>
        <div style={{ marginBottom: 40 }}>
          <Space>
            <Button
              type="primary"
              onClick={() => {
                setSPdfLoading(!isSPdfLoading)
              }}>
              {isSPdfLoading ? '重置' : '加载pdf(全部)'}
            </Button>
          </Space>
        </div>
        {isSPdfLoading ?
          <div>
            <Document
              loading={<div>加载中，请等待!</div>}
              file={testPdf}
              onLoadSuccess={onAllLoadSuccess}>
              {
                new Array(sNumPages).fill('').map((item, index) => {
                  return <div key={index}>
                    <Page
                      noData={null}
                      width={700}
                      key={index}
                      pageNumber={index + 1}
                    />
                  </div>
                })
              }
            </Document>
          </div> : null}
      </div>
    </div>
  )
}
export default Component
