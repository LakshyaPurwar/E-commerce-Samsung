import './SignInForm.css';
import {FcGoogle} from 'react-icons/fc';
import {Link, Navigate} from 'react-router-dom';
import UserNavbar from './UserNavbar';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function GoogleButton()
{
    return(
        <div className='google-button'>
            <div className='link-holder'>
                <Link  className = 'google-link ' to='#'>
                    <div className='google-icon-holder'>
                        <FcGoogle className='google-icon' />
                    </div>
                    <div className='google-text'>
                        Sign in With Google
                    </div>
                </Link>
            </div>
        </div>
    );

}





function SignInForm() {
    const Navigate = useNavigate();

    const [signInData, setSignInData ] = useState({email:"",password:""});
    const {email, password } = signInData;

    const handleSignInChange = (event)=>{
        console.log(event.target.name);
        const key = event.target.name;
        console.log(event.target.value);
        const value = event.target.value;
        setSignInData((prev)=>{
            return {...prev,[key]:value};
        });
    }

     async function handleSignInClick (event){
        event.preventDefault();
        const res = await fetch("/signin",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({email, password}),
        });
        console.log(res.status);
        const status = res.status;
        console.log(res.statusText);
        const data = await res.json();
        console.log(data);
        if(status == 200)
        {
            window.alert("User Logged In Successfully!");
            Navigate('/');
        }
        else{
            window.alert(data.error);
        }
        
     
    }

    return (
        <div className="signInFormPage">
            {/* <div className="signInNav">
                <div className="signInNavHeading">
                    <span className='samsung-logo'>Samsung</span> Account
                </div>
            </div> */}
            <UserNavbar />
            <div className='sign-in-form-body'>
                <div className='sign-in-form-container'>
                    <div className='sign-in-form'>
                        <div className='sign-in-form-heading'>
                            Sign In To Your Samsung Account
                        </div>
                        <form method='POST' class='form-inner-body'>
                            <input onChange={handleSignInChange} className='email-input' name = 'email' value={email} type='text' placeholder='Email/ Phone' />
                            <input onChange={handleSignInChange} className='password-input' name = 'password' value={password} type='password' placeholder='Password' />
                            <div className='remember'>
                                <input className='remember-input' type='radio' />   Remember my Id
                            </div>
                            <div  className='sign-in-btn-super-container'>
                                <div className='sign-in-btn-container'>
                                    <div className='sign-in-btn' onClick={handleSignInClick}>Sign-in</div>
                                    <div className='reset-password'>
                                    <Link className='reset-password-link' to='#'>Find Id or Reset Password</Link>
                                </div>
                                <div className='create-account'><Link className='create-account-link' to='/signup'>Create Account</Link></div>
                                </div>
                                
                            </div>
                            <div className='login-with-google'>
                                <GoogleButton />
                            </div>

                        </form >
                    </div>

                </div>
            </div>
        </div>
    );
}
export default SignInForm;

{/* <div className='login-with-google-btn'><Link  class='google-link'to='#'><FcGoogle className='google-icon'/> Sign In With Google</Link></div> */}