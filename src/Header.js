import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Admin",
            course: "React",
            message: "Welcome React",
            userLoggedIn: false
        }
    }
    render() {

        // Ternary Operator:

        return (
            <>
                {/* <div className="header">
                    <h1 className="m-0">Header</h1>
                    {
                        (this.state.userLoggedIn) ? <span className="user">Welcome {this.state.name}</span> : <Link className="user" to="/register">Create Account</Link>

                    }
                </div> */}
                <div className="header">
                    <h1 className="m-0">Header</h1>
                    <Link to="/login">Login</Link> OR
                    <Link to="/register"> Create Account</Link>
                </div>
            </>
        )

        //Short Circuit Operator

        // return (
        //     <div className="header">
        //         <h1>Header</h1>
        //         {
        //             (this.state.userLoggedIn) && <span className="user">Welcome {this.state.name}</span>

        //         }
        //     </div>
        // )


        // Element Variable:

        // let showElement
        // if (this.state.userLoggedIn) {
        //     showElement = <div className="header">
        //         <h1>Header</h1>
        //         <span className="user">Welcome {this.state.name}</span>
        //     </div>
        // } else {
        //     showElement = <div className="header">
        //         <h1>Header</h1>
        //         <span className="user">Welcome Guest</span>
        //     </div>
        // }
        // return (
        //     <>{showElement}</>
        // )
    }
}


export default Header