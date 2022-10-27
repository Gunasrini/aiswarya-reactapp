import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark justify-content-center navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/hooks">Hooks</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
