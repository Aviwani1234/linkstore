import React from "react";

function Register() {
  return (
    <div className="register">
      <form>
        <h1>Hello</h1>
        <input type="text" placeholder="Enter Your First Name" />
        <input type="text" placeholder="Enter Your Last Name" />
        <input type="email" placeholder="Enter Your Email Id" />
        <input type="password" placeholder="Enter A Strong Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
