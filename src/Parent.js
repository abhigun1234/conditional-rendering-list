import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

// parent method
    callMe(str){
      alert(str)
    }
    render() {
        return (
            <div>Parent

            <Child name="ravi" callHandler={this.callMe}></Child>
            </div>

        )
    }
}
