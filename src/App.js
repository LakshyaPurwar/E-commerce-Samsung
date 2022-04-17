
import Body from "./FrontPage/Components/Body/Body";
import SubNavState from "./context/SubNav/subNavState";
import { Routes, Route, Link, Router } from 'react-router-dom';
import FrontPage from "./FrontPage/FrontPage";
import User from "./Login/User";
import Header from "./FrontPage/Components/Header/Header";
import Navbar from "./FrontPage/Components/Header/Navbar/Navbar";
import DropdownState from "./context/nav-dropdown/dropdownState";
import Dropdown from "./FrontPage/Components/Header/Navbar/Dropdown";
import SignInForm from "./Login/SignInForm";
import SignUpForm from "./Login/SignUpForm/SignUpForm";
import SignupFormState from "./context/signup-form/SignUpFormState";
import EnterOtp from "./Login/SignUpForm/EnterOtp";
import MyPage from "./About/MyPage";



function App() {
  return (

    <div className='App'>
      <SignupFormState>
      <DropdownState>
      <Navbar />
      <Dropdown />
      </DropdownState>
      
      

      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/sign-in-page" element={<SignInForm />} />
        <Route exact path='/signup' element={<SignUpForm />}/>
        <Route exact path='/enterotp' element={<EnterOtp />}/>
        < Route exact path='/mypage' element={<MyPage />} />

      </Routes>

      </SignupFormState>





    </div>



  )
}

export default App;
