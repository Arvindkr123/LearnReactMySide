import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount(){
    console.log('App mounted')
  }

  componentWillUnmount(){
    console.log('App componentWillUnMount')
  }
  render() {
    console.log('App rendered')
    return (
      <div>
          <h1>hello App Component mount </h1>
      </div>
    )
  }
}
