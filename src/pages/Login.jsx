import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <form>
        <h1>Hello!</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Enter Your Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
