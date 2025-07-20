import React, { Component } from 'react';

class StateManage extends Component {

    
    constructor(){
        this.state={name:"abhi"}
    }
    setName(){
        this.setState({name:'ravi'})
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
    
}

export default StateManage;