import { useEffect } from 'react';
import './MyPage.css';
import { Navigate, useNavigate } from 'react-router-dom';
function MyPage()
{
    const Navigate = useNavigate();
    async function callMyPageBackend()
    {
        try{
            const res = await fetch('/mypagebackend',{
                method:"GET",
                headers:{
                    accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include",
            });
            const data = await res.json();
            if(res.status!=200)
            {
                throw new Error("The mypage backend send this error = ",data.error);
            }
            else{
                console.log("This is the user data received  = ",data);
            }
        }
        catch(error)
        {
            console.log(error);
            Navigate('/sign-in-page');

        }
        
    }
    useEffect(()=>{
        callMyPageBackend();
    },[]);
    return <h1>This sure is my page</h1>;
}
export default MyPage;