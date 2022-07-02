import React, { Component } from 'react'

export default class StateDemo extends Component {
    constructor(){
        super()
        this.state={name:"rajkumar",address:"pune",counter:0}
        this.setName = this.setName.bind(this);
    }
    setName(_name){
        console.log("this",this)
        this.setState({name:_name})
    }
  render() {
    return (
      <div>name:{this.state.name}
         address:{this.state.address}
         Count:{this.state.counter}
         <button onClick={()=>this.setName("rahul")}>change Name</button>
      </div>
    )
  }
}
