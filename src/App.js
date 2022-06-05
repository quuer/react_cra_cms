import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './app.less'

function App(props) {
  console.log('props---||', props)
  const { a, dispatch } = props
  const handleAsync = () => {
    console.log('异步---||', a)
    dispatch({ type: 'index/incrementAsync', payload: { a: 1 } })

  }
  const handleSync = () => {
    console.log('同步---||', a)
    dispatch({ type: 'index/updateState', payload: { a: 1 } })
  }
  return (
    <div className={styles.App}>
      <button onClick={handleAsync}>dispatch异步</button>
      <button onClick={handleSync}>dispatch同步</button>
    </div>
  )
}
const mapState = ({ global }) => {
  return global
}
const mapDispatch = (dispatch) => {
  return {
    dispatch
  }
}
// export default connect(mapState,mapDispatch)(App) 或下面的写法
export default connect(({ global }) => global, dispatch => ({ dispatch }))(App)
