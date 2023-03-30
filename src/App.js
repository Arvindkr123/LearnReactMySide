import React, { Component } from 'react'
import style from "./App.module.css"
import User from './User'

export default class App extends Component {
  render() {
    return (
      <>
        <h1 className={style.textb}>Hello App</h1>
        <User/>
      </>
    )
  }
}
