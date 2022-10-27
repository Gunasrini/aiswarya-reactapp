import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='sidebar'>
                <h3>{this.props.name}</h3>
                <h5>{this.props.city}</h5>
                <h5>{this.props.location}</h5>
                {/* <h4>{this.props.location}</h4> */}
            </div>
        )
    }
}
