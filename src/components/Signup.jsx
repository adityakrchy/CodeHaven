import React, {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password, confirmPassword, username);
        try{
        if(password !== confirmPassword){
            toast.error('Passwords do not match');
            return;
        }
        if(!email || !password || !confirmPassword || !username){
            toast.error('Please fill all the fields');
            return;
        }

        if(password.length < 6){
            toast.error('Password must be of atleast 6 characters');
            return;
        }

        // email validation
        if(!email.includes('@') || !email.includes('.')){
            toast.error('Please enter a valid email');
            return;
        }



        // toast.success('User created successfully');
        const response = await axios.post('http://localhost:5000/users', {
        email, password, confirmPassword, username
        }).then((res)=>{
           if(res.status === 200){
                toast.success('User created successfully');
                window.location.href = '/accounts/login';
           }
           
        }).catch((err)=>{
            if (err.response && err.response.status === 401) {
                toast.error('User already exists');
              } else {
                console.log(err);
              }
        });
        }
        catch(err){
            console.log(err);
        }
        
    }
    return (
        <>

            <div className="homepageWrapper">
                <div className="formWrapper">
                    <img src="/logo_bg_removed.png" alt="code-haven-logo" className='logoImg' />
                    <div className="formWrapperText">
                        <h2>Sign Up</h2>
                        <p>Join the community of coders</p>
                    </div>
                    <div className="inputGroup">
                        <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email Id' className="inputBox" />
                        <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' className="inputBox" />
                        <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}  placeholder='Confirm Password' className="inputBox" />
                        <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter Username' className="inputBox" />
                        <button onClick={handleSubmit} className="btn join-btn">Sign Up</button>
                    </div>
                </div>
                <div className="passwordResetText">
                    <p>Already have an account? <a href="/accounts/login">Login</a></p>
                </div>
            </div>
        </>
    )
}

export default Signup