import SignupFormContext from "./SignupFormContext";
import { useState } from "react";
import SignUpForm from "../../Login/SignUpForm/SignUpForm";

function SignupFormState(props)
{
    const [signupData, setSignupData ] = useState({
       email:"",
       password:"",
       cpassword:"",
       first_name:"",
       last_name:"",
       dob:"", 
    });

    function updateSignupData(key, value)
    {
        setSignupData((prev)=>{
            return {...prev,[key]:value}
        });
    }
        
    return (
        <SignupFormContext.Provider value={[signupData, updateSignupData]}>
            {props.children}
        </SignupFormContext.Provider>

    );
}
export default SignupFormState;