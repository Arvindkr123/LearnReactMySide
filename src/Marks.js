import React, { Component } from "react";

export default class Marks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mroll: this.props.roll,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateAndProps");
    console.log(props, state);
    if (props.roll !== state.mroll) {
      return { mroll: props.roll };
    }
    //  if props.roll and state.mroll if they are equal then return null
    return null;
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.mroll<107){
      console.log('Marks - shouldComponentUpdate');
      console.log(nextProps, nextState);
      return true;
    }
    console.log(nextProps, nextState);
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, PrevState){
    console.log('Marks - getSnapshotBeforeUpdate it run before update component')
    console.log(prevProps, PrevState)
    return 45;
  }

  componentDidUpdate(prevProps, PrevState, snapsShot){
    console.log('Marks - componentDidUpdate - it runs after update')
    console.log(prevProps, PrevState, snapsShot);
  }

  render() {
    console.log("Marks rendered");
    return (
      <div>
        <h1>{this.state.mroll}</h1>
      </div>
    );
  }
}
