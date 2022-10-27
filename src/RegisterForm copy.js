import React, { Component } from 'react'

export default class RegisterForm extends Component {
    constructor() {
        super()
        this.state = {
            firstname: "",
            lastname: ""
        }
    }
    myChange = (e) => {
        this.setState({
            firstname: e.target.value,
            lastname: e.target.value
        })
    }
    formSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.val)
    }
    // formSubmit = () => {
    //     // event.preventDefault()
    //     console.log(this.state.val);
    // }
    render() {
        return (
            <div className='row'>
                <div className='col-md-6 mb-4' style={{ textAlign: "left" }}>
                    <h3>Registration Form</h3>
                    <form action="#">
                        <div className="mb-3 mt-3">
                            <label htmlFor="fname" className="form-label">Firstname:</label>
                            <input type="text" className="form-control" id="fname" placeholder="Firstname" name="fname" value={this.state.val} onChange={this.myChange} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="lname" className="form-label">Lastname:</label>
                            <input type="text" className="form-control" id="lname" placeholder="Lastname" name="lname" value={this.state.val} onChange={this.myChange} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="mobNo" className="form-label">Mobile Number:</label>
                            <input type="number" className="form-control" id="mobNo" placeholder="Mobile Number" name="mobNo" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                        </div>
                        <button type="submit" onClick={this.formSubmit} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className='col-md-5'>
                    <p>{this.state.val}</p>
                </div>
            </div>
        )
    }
}
