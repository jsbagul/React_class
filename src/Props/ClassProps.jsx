import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>my age is {this.props.age} and my name is {this.props.name} </h1>
      </div>
    )
  }
}
