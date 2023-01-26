import React from 'react'

const Login = () => {
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
                        <input type="text" name="email" placeholder='Enter Email Id' className="inputBox" />
                        <input type="password" name="password" placeholder='Enter Password' className="inputBox" />
                        <div className="passwordResetText">
                            <p>Forgot Password? <a href="/resetpassword">Reset Password</a></p>
                        </div>
                        <button className="btn join-btn">Login</button>
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