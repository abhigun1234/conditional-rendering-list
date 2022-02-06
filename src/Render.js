import React, { Component } from 'react';

export default class Render extends Component {

     constructor(){
         super()
         this.state={messege:'yes',isLoggedIn:false}
     }
  render() {
   return this.state.isLoggedIn && <div>Welcome Students</div>
      //element variable
    //   let message
    //   if(this.state.isLoggedIn){

    //     message=<div>Hello how are You</div>;
    //   }
    //   else{
    //     message=<div>Bye Bye</div>;

    //   }
// multiple statement 
  // return(this.state.isLoggedIn?<div>Welcome Student</div>:<div>welcome Teachers</div>)
      //1
    //   if(this.state.messege==='yes'){
    // return <div>Hello how are You</div>;
    //   }
    //   else{

    //     return <div>Bye Bye</div>;
    //   }
    //2
  }
}
