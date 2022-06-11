import React from 'react'
import NotFoundPng from '../../assets/image/404.png'
import styles from './index.less'

const Component = () => {
  return (
    <div
      className={styles.notfound}
      style={{ backgroundImage: `url(${NotFoundPng})` }} />
  )
}

export default Component
