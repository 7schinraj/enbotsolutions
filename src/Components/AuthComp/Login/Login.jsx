import React, { useState } from 'react';
import './Login.css';
import LoginBG from '../../../Assets/LoginBG.svg';
import LogoLight from '../../../Assets/LogoLight.png';
import { MdError } from "react-icons/md";
import { FaLessThanEqual } from 'react-icons/fa';

const Login = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
  const [emails, setEmails] = useState({email:"",password:""});
  const [emailError, setEmailError] = useState({email:false,password:false});
  const [forgotEmail, setForgotEmail] = useState("");
  const [ForgotEmailError, setForgotEmailError] = useState(false);


  // Function to open the forgot password popup
  const openPopup = () => {
    setIsPopupVisible(true);
  };

  // Function to close the forgot password popup
  const closePopup = () => {
    setIsPopupVisible(false);
    setForgotEmailError(false);
  };
console.log(emails);


  function getdata(e) {
    let names=e.target.name
    let values=e.target.value
    setEmails({...emails, [names]: values})
    setEmailError({...emailError, [names]:false})
  }

  // Function to close the error popup
  const closeErrorPopup = () => {
    setIsErrorPopupVisible(false);
    setIsPopupVisible(true);
  };

  const handleOnchageForgotEmail = (e) => {
    var email = e.target.value
    setForgotEmail(email);
  setForgotEmailError(false);
  };

  const showErrorPopup = () => {
    if (forgotEmail == "") {
      setForgotEmailError(true);
      setIsErrorPopupVisible(false);
      return;
    }
    setForgotEmailError(false);
    setIsErrorPopupVisible(true);
  };
console.log(ForgotEmailError);

  const handleLogin = (e) => {
    let errors = { email: false, password: false };
    if (emails.email === "") {
      errors.email = true;
    }
    if (emails.password === "") {
      errors.password = true;
    }
    setEmailError(errors);
  };

  return (
    <div>
      <div className="login-section">
        <div className="assets-container">
          <img src={LoginBG} alt="Login Background" />
        </div>
        <div className="login-container">
          <img className="login-logo" src={LogoLight} alt="EnBot" />

          <div className='input-containers'>
            <input type="email" name='email' placeholder="Email Address" required className={emailError.email ? "check":"checked"} onChange={getdata} />
            {emailError.email && <p className='email-error'>Please enter your Email Address</p>}
          </div>

          <div className='input-containers'>
            <input type="password" name='password' placeholder="Password" required aria-required="true" className={emailError.password ? "check":"checked"}  onChange={getdata}/>
            {emailError.password && <p className='email-error'>Please enter the Password</p>}
          </div>
          <div className='btn-container'>
            <button onClick={handleLogin}>Login</button>
            <p className='forgot-link' onClick={openPopup}>Forgot Password? Click here to change</p>
          </div>
        </div>

        {/* Forgot Password Popup */}
        {isPopupVisible && (
          <div className="overlay">
            <div className="forgot-password-container">
              <div className="forgot-header-section">
                <h3>Forgot Password?</h3>
                <p>Enter your username and we will send you a mail to reset password.</p>
              </div>
              <div className="email-field-container">
                <input 
                // className="email-field"
                className={ForgotEmailError ? "forgot-check":"forgot-checked"}
                 name='email' type="email" onChange={handleOnchageForgotEmail} placeholder="Enter Email Address" required />
                {ForgotEmailError && <p className='email-error'>Please enter your Email Address</p>}
              </div>
              <div className="btns">
                <button className="cancel-btn" onClick={closePopup}>
                  CANCEL
                </button>
                <button className="send-btn" onClick={showErrorPopup}>SEND LINK</button>
              </div>
            </div>
          </div>
        )}

        {/* Error Popup */}
        {isErrorPopupVisible && (
          <div className="overlay">
            <div className="return-login-popup-container">
              <MdError className="error-icon" />
              <p>Please enter the Registered Email Address</p>
              <button className='cancel-btn' onClick={closeErrorPopup}>CLOSE</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
