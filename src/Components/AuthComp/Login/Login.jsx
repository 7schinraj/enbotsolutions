// import React, { useState } from 'react';
// import './Login.css';
// import LoginBG from '../../../Assets/LoginBG.svg';
// import LogoLight from '../../../Assets/LogoLight.png';
// import { MdError } from "react-icons/md";
// import { FaLessThanEqual } from 'react-icons/fa';
// // import LogoLight from "../../../Assets/MaxDarkLogo.png";
// // import LogoLight from "../../../Assets/MaxLightLogo.png";

// const Login = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
//   const [emails, setEmails] = useState({email:"",password:""});
//   const [emailError, setEmailError] = useState({email:false,password:false});
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [ForgotEmailError, setForgotEmailError] = useState(false);


//   // Function to open the forgot password popup
//   const openPopup = () => {
//     setIsPopupVisible(true);
//   };

//   // Function to close the forgot password popup
//   const closePopup = () => {
//     setIsPopupVisible(false);
//     setForgotEmailError(false);
//   };
// console.log(emails);


//   function getdata(e) {
//     let names=e.target.name
//     let values=e.target.value
//     setEmails({...emails, [names]: values})
//     setEmailError({...emailError, [names]:false})
//   }

//   // Function to close the error popup
//   const closeErrorPopup = () => {
//     setIsErrorPopupVisible(false);
//     setIsPopupVisible(true);
//   };

//   const handleOnchageForgotEmail = (e) => {
//     var email = e.target.value
//     setForgotEmail(email);
//   setForgotEmailError(false);
//   };

//   const showErrorPopup = () => {
//     if (forgotEmail == "") {
//       setForgotEmailError(true);
//       setIsErrorPopupVisible(false);
//       return;
//     }
//     setForgotEmailError(false);
//     setIsErrorPopupVisible(true);
//   };
// console.log(ForgotEmailError);

//   const handleLogin = (e) => {
//     let errors = { email: false, password: false };
//     if (emails.email === "") {
//       errors.email = true;
//     }
//     if (emails.password === "") {
//       errors.password = true;
//     }
//     setEmailError(errors);
//   };

//   return (
//     <div>
//       <div className="login-section">
//         <div className="assets-container">
//           <img src={LoginBG} alt="Login Background" />
//         </div>
//         <div className="login-container">
//           <img className="login-logo" src={LogoLight} alt="EnBot" />

//           <div className='input-containers'>
//             <input type="email" name='email' placeholder="Email Address" required className={emailError.email ? "check":"checked"} onChange={getdata} />
//             {emailError.email && <p className='email-error'>Please enter your Email Address</p>}
//           </div>

//           <div className='input-containers'>
//             <input type="password" name='password' placeholder="Password" required aria-required="true" className={emailError.password ? "check":"checked"}  onChange={getdata}/>
//             {emailError.password && <p className='email-error'>Please enter the Password</p>}
//           </div>
//           <div className='btn-container'>
//             <button onClick={handleLogin}>Login</button>
//             <p className='forgot-link' onClick={openPopup}>Forgot Password? Click here to change</p>
//           </div>
//         </div>

//         {/* Forgot Password Popup */}
//         {isPopupVisible && (
//           <div className="overlay">
//             <div className="forgot-password-container">
//               <div className="forgot-header-section">
//                 <h3>Forgot Password?</h3>
//                 <p>Enter your username and we will send you a mail to reset password.</p>
//               </div>
//               <div className="email-field-container">
//                 <input 
//                 // className="email-field"
//                 className={ForgotEmailError ? "forgot-check":"forgot-checked"}
//                  name='email' type="email" onChange={handleOnchageForgotEmail} placeholder="Enter Email Address" required />
//                 {ForgotEmailError && <p className='email-error'>Please enter your Email Address</p>}
//               </div>
//               <div className="btns">
//                 <button className="cancel-btn" onClick={closePopup}>
//                   CANCEL
//                 </button>
//                 <button className="send-btn" onClick={showErrorPopup}>SEND LINK</button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Error Popup */}
//         {isErrorPopupVisible && (
//           <div className="overlay">
//             <div className="return-login-popup-container">
//               <MdError className="error-icon" />
//               <p>Please enter the Registered Email Address</p>
//               <button className='cancel-btn' onClick={closeErrorPopup}>CLOSE</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import './Login.css';
import LoginBG from '../../../Assets/LoginBG.svg';
import LogoLight from '../../../Assets/LogoLight.png';
import { MdError } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
  const [emails, setEmails] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState({ email: false, password: false });
  const [forgotEmail, setForgotEmail] = useState("");
  const [ForgotEmailError, setForgotEmailError] = useState(false);
  const [loginError, setLoginError] = useState(""); // To show error message from API
  const [isLoading, setIsLoading] = useState(false); // To manage the loading state
  const [isSuccess, setIsSuccess] = useState(false); // To show success message from API
  const navigate = useNavigate();

  // Function to open the forgot password popup
  const openPopup = () => {
    setIsPopupVisible(true);
  };

  // Function to close the forgot password popup
  const closePopup = () => {
    setIsPopupVisible(false);
    setForgotEmailError(false);
  };

  function getdata(e) {
    let names = e.target.name;
    let values = e.target.value;
    setEmails({ ...emails, [names]: values });
    setEmailError({ ...emailError, [names]: false });
  }

  // Function to close the error popup
  const closeErrorPopup = () => {
    setIsErrorPopupVisible(false);
    setIsPopupVisible(true);
  };

  const handleOnchageForgotEmail = (e) => {
    var email = e.target.value;
    setForgotEmail(email);
    setForgotEmailError(false);
  };

  const showErrorPopup = () => {
    if (forgotEmail === "") {
      setForgotEmailError(true);
      setIsErrorPopupVisible(false);
      return;
    }
    setForgotEmailError(false);
    setIsErrorPopupVisible(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    let errors = { email: false, password: false };
    if (emails.email === "") {
      errors.email = true;
    }

    else if (!emails.email.includes("@")) {
      errors.email = true;
      setLoginError("Please enter a valid email.");
      setTimeout(() => {
        setLoginError("");
      }, 3000);
      return;
    }

    if (emails.password === "") {
      errors.password = true;
    }
    setEmailError(errors);

    if (errors.email || errors.password) {
      return;
    }

    // API Call
    setIsLoading(true); // Start loading
    setLoginError(""); 

    try {
      const response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: emails.email,
          password: emails.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.message){

        }
        throw new Error(errorData.message);
      }
      const data = await response.json();
      console.log("Login successful:", data);
      navigate('/');
    } catch (error) {
      setLoginError(error.message);
      setTimeout(() => {
        setLoginError("")
      }, 2000);
    } finally {
      setIsLoading(false);
    }
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
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className={emailError.email ? "check" : "checked"}
              onChange={getdata}
            />
            {emailError.email && <p className='email-error'>Please enter your Email Address</p>}
          </div>

          <div className='input-containers'>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              aria-required="true"
              className={emailError.password ? "check" : "checked"}
              onChange={getdata}
            />
            {emailError.password && <p className='email-error'>Please enter the Password</p>}
          </div>
          <div className='btn-container'>
            <button onClick={handleLogin} disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
            {loginError && <p className="login-error">{loginError}</p>}
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
                  className={ForgotEmailError ? "forgot-check" : "forgot-checked"}
                  name="email"
                  type="email"
                  onChange={handleOnchageForgotEmail}
                  placeholder="Enter Email Address"
                  required
                />
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
