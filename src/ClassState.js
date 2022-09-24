import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(){
        super()
        this.state={name:"mahesh",address:"pune",status:true}
    }
    setName(){
     this.setState({name:"ramesh"})

    }
  render() {
    return (
      <div><div>
        if(this.state.status===true){}
        {this.state.name}
        {this.state.address}
        <button onClick={()=>this.setName()}>setName</button>
        </div></div>
    )
  }
}
