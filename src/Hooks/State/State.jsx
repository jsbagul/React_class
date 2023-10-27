import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()
        this.state={count:0,
                    color:"red"}
    }
    change(){
        this.setState({count:this.state.count+1})
    }
    color(){
        this.setState({color:this.state.color="green"})
    }

  render() {
    return (
      <div>
  <h1 style={{color:`${this.state.color}`}}>{this.state.count}</h1>    

<button onClick={()=> this.change()}>+</button>
<button onClick={()=> this.color()}>bgcolor</button>
      </div>
    )
  }
}
