import React, { Component } from "react";

export class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Viru",
      roll: this.props.roll,
    };
  }

  handleEvent = () => {
    this.setState({ name: "Jai" , roll:102});
    console.log('button clicked ', this)
  };
  // handleEvent = () => {
  //   this.setState((state, props) => {
      // console.log(state)
      // console.log(props)
      // state.name = 'Jai'
      // state.roll = 102
    // });
    // console.log('button clicked ', this)
  // };
  render() {
    return (
      <div>
        <h1>
          Hello {this.state.name} and your roll number is {this.state.roll}
        </h1>
        <button onClick={this.handleEvent}>Update Name</button>
      </div>
    );
  }
}

export default Student;
