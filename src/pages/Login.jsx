import React from "react";
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  return (
    <div className="login">
      <form>
        <h1>Hello!</h1>
        <intput type="text" placeholder="username" />
        <intput type="password" placeholder="Enter Your Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
