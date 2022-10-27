import React from 'react';
import UseContext from './UseContext';
import UseEffectHooks from './UseEffectHooks';
import UseRef from './UseRef';
import UseStateHook from './UseStateHook';
// import { Routes, Route, Link } from "react-router-dom";

export default function Hooks() {
    return (
        <div className='container-fluid'>
            <div className='row p-5'>
                {/* <nav className="navbar navbar-dark bg-secondary col-md-2">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className='nav-link' to="/usestate">useState</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 3</a>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                <UseStateHook />
                <UseEffectHooks />
                <UseContext />
                <UseRef />
            </div>
        </div>
    )
}
