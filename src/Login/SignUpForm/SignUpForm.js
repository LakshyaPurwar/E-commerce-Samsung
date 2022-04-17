import UserNavbar from "../UserNavbar";
import { Link } from "react-router-dom";
import './SignUpForm.css';
import { useContext } from "react";
import SignupFormContext from "../../context/signup-form/SignupFormContext";
import { useNavigate } from "react-router-dom";






function SignUpForm() {

    const [signupData, updateSignupData] = useContext(SignupFormContext);
    const {email, password, cpassword, first_name,last_name,dob} = signupData;
    const Navigate = useNavigate();


    function handleSignupChange(event)
    {
        console.log(event.target.name);
        const key = event.target.name;
        console.log(event.target.value);
        const value = event.target.value;
        updateSignupData(key, value);
    }

     async function signupUser(e)
    {
        e.preventDefault();
         const res = await fetch("/signup",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email, password, cpassword, first_name,last_name,dob}),
        });
        const status = res.status;
        const data = await res.json();
        console.log(data);
        console.log(status);

        

        if(status == 200)
        {
            window.alert("User registered successfully");
            Navigate('/sign-in-page');
        }
        else{
            console.log(data.error);
            window.alert(data.error);
        }
  
       
        

    }

    return (
        <div className="signupPage">
            <UserNavbar />
            <div className="signupPage-body">
                <div className="signup-form-container">
                    <div className="signup-form">
                        <div className="signup-form-header">
                            <div className="signup-form-heading">
                                Create you Samsung Account
                            </div>

                        </div>
                        <form  method="post" className="signup-form-body">
                            <div className="signup-grid-item signup-item-1">
                                <input onChange={handleSignupChange} value={email} placeholder="Email" type='text' className='form-input' name="email" ></input>
                            </div>
                            <div className="signup-grid-item signup-item-2">
                                <input onChange={handleSignupChange} value={password} placeholder="Password" type='password' className='form-input' name="password" ></input>
                            </div>
                            <div className="signup-grid-item signup-item-3">
                                <input onChange={handleSignupChange} value={cpassword} placeholder="Confirm Password" type='password' className='form-input' name="cpassword" ></input>
                            </div>
                            <div className="signup-grid-item signup-item-4">
                                <input onChange={handleSignupChange} value={first_name} placeholder="First Name" type='text' className='form-input' name="first_name" ></input>
                            </div>
                            <div className="signup-grid-item signup-item-5">
                                <input onChange={handleSignupChange} value={last_name} placeholder="Last Name" type='text' className='form-input' name="last_name" ></input>
                            </div>
                            <div className="signup-grid-item signup-item-6">
                                <input onChange={handleSignupChange} value={dob} placeholder="Date of Birth" type='date' className='form-input' name="dob" ></input>
                            </div>

                        </form>
                        <div className="signup-form-footer">
                            <div className='back-button-holder'>
                                <div className='signup-button'>Back</div>
                            </div>

                            <div className="next-button-holder">
                                <div className='signup-button' onClick={signupUser}>Next</div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

           
    );
}
export default SignUpForm;