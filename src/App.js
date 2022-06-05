import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './App.less'

function App(props) {

  return (
    <div className={styles.App}>
      app
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
export default connect(mapState, mapDispatch)(App)
