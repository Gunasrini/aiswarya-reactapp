import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fire } from './Firebase/FirebaseConnection';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const formSubmit = (e) => {
        e.preventDefault();
        let emailErr, pwdErr = true;
        if (email === "") {
            document.getElementById("emailErr").innerHTML = "Please enter the email";
        } else {
            document.getElementById("emailErr").innerHTML = "";
            emailErr = false;
        }
        if (password === "") {
            document.getElementById("pwdErr").innerHTML = "Please enter the password";
        } else {
            document.getElementById("pwdErr").innerHTML = "";
            pwdErr = false;
        }
        if ((emailErr || pwdErr) === true) {
            alert("Please fill all the details");
        } else {
            // alert("Successfully Logged In!!!");
            fire.auth().createUserWithEmailAndPassword(email, password).then(() => {
                navigate('/login')
            })
        }
    }
    return (
        <div className='col-md-4 ms-auto me-auto py-5 text-start'>
            <h1>Register Form</h1>
            <form onSubmit={formSubmit}>
                <div className='form-row mb-3'>
                    <label className='form-label'>Email</label>
                    <input type="email" className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id='emailErr' className='error'></div>
                </div>
                <div className='form-row mb-3'>
                    <label className='form-label'>Password</label>
                    <input type="text" className='form-control' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div id='pwdErr' className='error'></div>
                </div>
                <div><button className='btn btn-primary'>Register</button></div>
            </form>
        </div>
    )
}
