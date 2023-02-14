import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async () => {
        console.log('login clicked');
        const res = await axios.post('http://localhost:5000/login', {
        email, password
    }).then((res)=>{
        console.log(res.data.auth);
       if(res.status === 200){
            toast.success('Login Successful');
        //    window.location.href = '/';
       }
       if(res.status === 401){
           toast.error('Invalid Credentials');
       }

       if(res.data.auth==true){
              window.location.href = '/';
       }
    }).catch(err=>console.log(err));
}


// handle login and redirect


    return (
        <>

            <div className="homepageWrapper">
                <div className="formWrapper">
                    <img src="/logo_bg_removed.png" alt="code-haven-logo" className='logoImg' />
                    <div className="formWrapperText">
                        <h2>Welcome Back</h2>
                        <p>Enter your credentials to access your account.</p>
                    </div>
                    <div className="inputGroup">
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" name="email" placeholder='Enter Email Id' className="inputBox" />
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" placeholder='Enter Password' className="inputBox" />
                        <div className="passwordResetText">
                            <p>Forgot Password? <a href="/resetpassword">Reset Password</a></p>
                        </div>
                        <button onClick={handleLogin} className="btn join-btn">Login</button>
                    </div>
                </div>
                <div className="passwordResetText">
                    <p>Don't have an account? <a href="/accounts/signup">Sign Up</a></p>
                </div>
            </div>
        </>
    )
}

export default Login