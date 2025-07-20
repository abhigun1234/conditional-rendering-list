import React, { Component } from 'react';

export default class ConditionalRendering extends Component {
    constructor(){
        super()
        this.state={isLoogedIn:false}
    }
  render() {
//  return   <div>
//       Hello
//     </div>
//  
 // 1
  //  if(this.state.isLoogedIn){
  //   return <div>Welcome Students</div>
    
  // }
  // else{
  //   return  <div>Welcome Teachers</div>
    
  //   }
    // 2 
    // let messege
    // if(this.state.isLoogedIn){
    //    messege=<div>Welcome Students</div>
    // }
    // else{
    //     messege=<div>Welcome Teachers</div>   
    // }
    // return <div>{messege}</div>
    // 3
      //return(this.state.isLoogedIn?<div>Welcome Student</div>:<div>welcome Teachers</div>)
    // 4
      return this.state.isLoogedIn && <div>Welcome Students</div>
  }
}
