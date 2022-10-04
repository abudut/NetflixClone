import React, { useRef } from "react";
import "../app/styles/SignUp.css";
import { auth } from "../firebase";

function SignUp() {
  const emaiilRef = useRef(null);
  const passwordRef = useRef(null)
  const register=(e)=>{
    e.preventDefault();
    auth. createUserWithEmailAndPassword(
      emaiilRef.current.value,
      passwordRef.current.value
    )
    .then((authUser)=>{
      console.log(authUser)
    })
      .catch((error)=>{
        alert((error.message))
      })
  };

  const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emaiilRef.current.value,
      passwordRef.current.value
    )
    .then((authUser)=>{
      console.log(authUser)
    })
      .catch((error)=>{
        alert((error.message))
      })
  };

  return (
    <div className="signUp">
      <form>
        <h1>Sign In</h1>
        <input ref={emaiilRef} type="email" placeholder='Email or phone number' name="" id="" />
        <input ref={passwordRef} type="password" placeholder='Password' name="" id="" />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4><span  className="signUpGray">New to Netflix? </span><span className="signUpLink" onClick={register}>Sign up now.</span> </h4>
      </form>
    </div>
  );
}

export default SignUp;
