import React, { useState } from "react";
import "./LogInPopUp.css";
const LogInPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  const[data,setData]=useState({
name:"",
email:"",
password:""

  })

  const onChangeHandler=(event)=>{
const name=event.target.name;
const value=event.target.value;
setData(data=>({...data,[name]:value}))
  }
 
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>

          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input name="name" onChange={onChangeHandler} value={data.name}type="text" placeholder="Your Name" required />
          )}
          <input name="email"  onChange={onChangeHandler} value={data.email}type="email" placeholder="Your email" required />
          <input name="password" onChange={onChangeHandler} value={data.password}type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing ,I agree to the term of use and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already hav an account?
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};
import "./LogInPopUp.css";
import { assets } from "../../assets/assets";
import { log } from "console";
export default LogInPopUp;
