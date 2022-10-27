import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPageFound() {
    return (
        <div className='about-page'>
            <h1 style={{ color: "#000", textDecoration: "underline" }}>Oops, No Page Found, Please visit the <Link to="/">Home page</Link></h1>

        </div>
    )
}
