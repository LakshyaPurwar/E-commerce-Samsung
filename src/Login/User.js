import './User.css';
import {Link, Navigate} from 'react-router-dom';
import { useState } from 'react';



function User()
{
    const [guestEmail, setGuestEmail ] = useState('');
    //handleChange function-->Monitoring the change in the email field of guest sign in .
    function handleChange(event)
    {
            setGuestEmail(event.target.value);
    }

    
    async function sendOtp()
    {
        const res = await fetch("/guestlogin",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({email:guestEmail}),
        });
        console.log(res.status);
        const status = res.status;
        console.log(res.statusText);
        const data = await res.json();
        console.log(data);
        if(status == 200)
        {
            window.alert("Otp sent successfully!");
            window.localStorage.setItem("email",guestEmail);
            Navigate('/enterotp');
        }
        else{
            window.alert(data.error);
        }
    }




    return(
        <div className='user'>
            <div className='login'>
                <div className='login-form-container'>
                    <div className='login-grid-item login-grid-item-1'>Sign into Samsung Account</div>
                    <div className='login-grid-item login-grid-item-2'>Please Login with your Samsung Account so that you can view and track you orders</div>
                    <div className='login-grid-item login-grid-item-3'>
                        <div className='login-button'><Link className='link' to='/sign-in-page'>Sign-in with Samsung</Link></div>
                        </div>
                    <div className='login-grid-item login-grid-item-4'>
                        Don't have an account?<Link className='signup-link' to='/signup'>Sign Up here.</Link>
                    </div>

                </div>
            </div>
            <div className='signUp'>
                <div className='signUp-form-container'>
                <div className='signUp-grid-item signUp-grid-item-1'>Login</div>
                    <div className='signUp-grid-item signUp-grid-item-2'>
                        <input  value ={guestEmail} onChange={handleChange} name ='email' className='signUp-input' type='text' placeholder='Email / Mobile Number'></input>
                    </div>
                    <div className='signUp-grid-item signUp-grid-item-3'>
                        <div className='signUp-button' onClick={sendOtp}>Send Otp</div>
                    </div>
                </div>
                 </div>
        </div>
    );
}
export default User;
