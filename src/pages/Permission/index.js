import React, { useState } from 'react'
import styles from './index.less'
import { useNavigate, useParams } from 'react-router'
import { Button, ConfigProvider } from 'antd'
import { useLocation } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { SketchPicker } from 'react-color'

const Component = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [color, setColor] = useState({
    primaryColor: '#1890FF',
    errorColor: '#FF4D4F',
    warningColor: '#FAAD14',
    successColor: '#52C41A',
    infoColor: '#1890FF'
  })
  const onColorChange = (nextColor) => {
    const mergedNextColor = { ...color, ...nextColor }
    setColor(mergedNextColor)
    ConfigProvider.config({
      theme: mergedNextColor
    })
  }

  return (<div>
    <SketchPicker
      presetColors={['#1890FF', '#25B864', '#FF6F00']}
      color={color.primaryColor}
      onChange={({ hex }) => {
        console.log(hex, '◀◀◀hex')
        onColorChange({
          primaryColor: hex
        })
      }}
    />
  </div>)
}

export default Component
