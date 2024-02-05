import React from "react";
import "./Login.scss";
import { useState } from "react";
function Login() {
  const [action, setAction] = useState("Sign Up");
  const handleClick= (e)=>{
  e.preventDefault();
  }
  return (
    <div className="form-container">
      <form className="form">
        <div className="input-wrapper">
          <h1>{action}</h1>
          {action === "Login" ? (
            <div></div>
          ) : (
            <input type="text" placeholder="Full Names..."></input>
          )}

          <input type="text" placeholder="@gmail.com"></input>
          <input type="password" placeholder="password..."></input>
          {action === "Login" ? (
            <div></div>
          ) : (
            <input type="password" placeholder="confirm password.."></input>
          )}
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot">
            <div className="remember">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <a href="http://">
              <p>forgot password ?</p>
            </a>
          </div>
        )}

        <div className="submit-container">
          <div onClick={handleClick} className="btn">
            <button
              className={action === "Login" ? "submit-grey" : "btn"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </button>
            <button
              className={action === "Sign Up" ? "submit-grey" : "btn"}
              onClick={() => {
                setAction("Login");
               
              }}
            >
              Login
            </button>
          </div>
        </div>
        <div className="register">
          <p>Dont have an account?</p>
          {/* <a href="http://">Register </a> */}
        </div>
      </form>
    </div>
  );
}

export default Login;
