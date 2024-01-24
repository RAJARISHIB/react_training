import React, { Component } from 'react'

export default class Myclass extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            message: "h1"
        };
    }
    handleClick=() =>{
        this.setState({
            message: "Button click"
        });
    }
  render() {
    return (
      <div>
        <h1>
            (this.state.message)
        </h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
