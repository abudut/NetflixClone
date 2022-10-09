import React, { useState } from "react";
import "../app/styles/Login.css";
import SignUp from "./SignUp";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div  style={{
          backgroundImage: `url('/logbkg.jpg')`,
          
        }} className="loginBackground">
        <div className="loginGradient">
          <div className="header">
            <div className="r">
              <img
                className="loginLogo"
                src="/logo.png"
                alt=""
              />
            </div>

            <div className="l">
              <button onClick={() => setSignIn(true)} className="loginButton">
                Sign In
              </button>
            </div>
          </div>
          {signIn ? (
            <SignUp />
          ) : (
            <div className="loginContent">
              <>
                <h1>
                  Unlimited films, TV <br></br> programmes and more.
                </h1>
                <h2>Watch anyware. Cancel at any time.</h2>
                <h3>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
               
                <div className="loginInput">
                  <form>
                    <input type="email" placeholder="Email address" />
                    <button
                      onClick={() => setSignIn(true)}
                      className="getStarted"
                    >
                      Get Started &gt;
                    </button>
                  </form>
                </div>
                 
    
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
