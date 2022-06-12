import React, { useEffect } from 'react'
import styles from './index.less'
import ScrollReveal from 'scrollreveal'
import { useLocation } from 'react-router-dom'

const Component = (props) => {
  console.log(props, '◀◀◀props')

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      // 动画的时长
      duration: 1000,
      // 延迟时间
      delay: 200,
      // 动画开始的位置，'bottom', 'left', 'top', 'right'
      // origin: 'top',
      // 回滚的时候是否再次触发动画
      reset: true,
      // 在移动端是否使用动画
      // mobile: true,
      // 滚动的距离，单位可以用%，rem等
      // distance: '40px',
      // 其他可用的动画效果
      opacity: 0,
      easing: 'linear',
      scale: 0.8
    })
  }, [])
  return (<div>
    <div className={styles.content}>
      <div className={styles.col}>
        <div className={'reveal ' + styles.item_one}></div>
        <div className={'reveal ' + styles.item_two}></div>
        <div className={'reveal ' + styles.item_three}></div>
        <div className={'reveal ' + styles.item_four}></div>
        <div className={'reveal ' + styles.item_five}></div>
        <div className={'reveal ' + styles.item_six}></div>
      </div>
      <div className={styles.col}>
        <div className={'reveal ' + styles.item_two}></div>
        <div className={'reveal ' + styles.item_three}></div>
        <div className={'reveal ' + styles.item_four}></div>
        <div className={'reveal ' + styles.item_five}></div>
        <div className={'reveal ' + styles.item_six}></div>
        <div className={'reveal ' + styles.item_one}></div>
      </div>
      <div className={styles.col}>
        <div className={'reveal ' + styles.item_three}></div>
        <div className={'reveal ' + styles.item_four}></div>
        <div className={'reveal ' + styles.item_five}></div>
        <div className={'reveal ' + styles.item_six}></div>
        <div className={'reveal ' + styles.item_one}></div>
        <div className={'reveal ' + styles.item_two}></div>
      </div>
      <div className={styles.col}>
        <div className={'reveal ' + styles.item_four}></div>
        <div className={'reveal ' + styles.item_five}></div>
        <div className={'reveal ' + styles.item_six}></div>
        <div className={'reveal ' + styles.item_one}></div>
        <div className={'reveal ' + styles.item_two}></div>
        <div className={'reveal ' + styles.item_three}></div>
      </div>
      <div className={styles.col}>
        <div className={'reveal ' + styles.item_five}></div>
        <div className={'reveal ' + styles.item_six}></div>
        <div className={'reveal ' + styles.item_one}></div>
        <div className={'reveal ' + styles.item_two}></div>
        <div className={'reveal ' + styles.item_three}></div>
        <div className={'reveal ' + styles.item_four}></div>
      </div>
      <div className={styles.col}>
        <div className={'reveal ' + styles.item_six}></div>
        <div className={'reveal ' + styles.item_one}></div>
        <div className={'reveal ' + styles.item_two}></div>
        <div className={'reveal ' + styles.item_three}></div>
        <div className={'reveal ' + styles.item_four}></div>
        <div className={'reveal ' + styles.item_five}></div>
      </div>
    </div>
  </div>)
}

export default Component
