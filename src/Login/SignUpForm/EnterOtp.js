import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './EnterOtp.css';
function EnterOtp()
{
    const [otp,setOtp ] =  useState('');
    function handleOtpChange(event)
    {
        setOtp(event.target.value);
    }

    async function handleClick(event)
    {
        event.preventDefault();
        const email  = window.localStorage.getItem("email");
        const res = await fetch("/enterotpbackend",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({email,otp}),
        });
        console.log(res.status);
        const status = res.status;
        console.log(res.statusText);
        const data = await res.json();
        console.log(data);
        if(status == 200)
        {
            window.alert("Otp verified Successfully");
            Navigate('/');
            
        }
        else{
            window.alert(data.error);
        }

    } 


    return <div className='otp-page'>
        <form className='otp-form' method='POST'>
            <input onChange={handleOtpChange} type="text" className='input-otp' placeholder='Enter 4 Digit Otp' value={otp}/ >
            <button onClick={handleClick}></button>
        </form>
    </div>
}

export default EnterOtp;