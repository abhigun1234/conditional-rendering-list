import React, { Component } from 'react'

export default class Person extends Component {
    constructor() {
        super()
        this.state = { name: "gaurav", email: "gaurav@gmail.com" }
    }
    render() {
        return (
            <div>Person

                <label>name</label>
                {this.state.name}
                <p></p>
                <label>email</label>
                <p></p>
                {this.state.email}
            </div>
        )
    }
}
