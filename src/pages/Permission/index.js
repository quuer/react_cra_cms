import React, { useState } from 'react'
import {  ConfigProvider } from 'antd'
import { SketchPicker } from 'react-color'

const Component = () => {
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
        onColorChange({
          primaryColor: hex
        })
      }}
    />
  </div>)
}

export default Component
