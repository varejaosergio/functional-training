import React, { useState } from "react";
import loginStyles from '../styles/Login.module.css'

function Login({onSubmit}) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  return (
    <form className={loginStyles.form}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({email, password});
      }}
    > 
      <input
        className={loginStyles.input}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="Email"
        placeholder="Email"
      />
      <input
        className={loginStyles.input}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        id="password"
        placeholder="Password"
      />
      <a href="/signup" className={loginStyles.signup}>Create account <span>SignUp</span></a>
      <button className={loginStyles.button} type="submit">
        Login
      </button>
    </form >
  );
}

export default Login;