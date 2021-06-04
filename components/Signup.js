import React, { useState } from "react";
import formStyles from '../styles/Signup.module.css'

const Signup = ({onSubmit}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  return (
    <form className={formStyles.form}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({name, email, password});
      }}
    >
       
      <input
        className={formStyles.input}
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="name"
        placeholder="Name"
      />
      
      <input
        className={formStyles.input}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}

        helperText="Exemplo de e-mail: sv@carolvarejao.com"
        id="Email"
        placeholder="Email"
      />
      
      <input
        className={formStyles.input}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        id="password"
        placeholder="Password"
      />

      <button className={formStyles.button} type="submit">
        Sign up
      </button>
    </form >
  );
}

export default Signup;