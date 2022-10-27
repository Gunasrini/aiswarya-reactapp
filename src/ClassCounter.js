import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            message: "Angular"
        }
        console.log("Constructor method called")
    }
    increment() {
        this.setState({
            count: this.state.count + 1,
            message: "React"
        })
        // this.setState = {
        //     count: this.state.count + 1
        // }
        // console.log(this.state.count + 1)
        // console.log("btn clicked")
    }
    componentDidMount() {
        document.title = `clicked ${this.state.count} times`;
        console.log("ComponentDidMount method called");
    }
    componentDidUpdate() {
        document.title = `clicked ${this.state.count} times`;
        console.log("ComponentDidUpdate method called")
    }
    render() {
        console.log("Render method called")
        return (
            <div className='my-4'>
                <h3>Counter: {this.state.count} / {this.state.message} Class</h3>
                <button className='btn btn-primary' onClick={() => this.increment()}>Increment</button>
                <button className='ms-4 btn btn-primary' onClick={() => this.componentWillUnmount()}>Reset</button>
            </div>
        )
    }
    componentWillUnmount() {
        document.title = this.state.count;
        console.log("componentWillUnMount method called");
    }
}
