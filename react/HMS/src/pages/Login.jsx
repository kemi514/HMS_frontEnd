import React from "react";
import Input from "../components/Input";
const Login = () => {
  return (
    <div className="login d-flex align-items-center justify-content-center">
      <div className="container rounded shadow-md p-5">
        <p className="text-center ">HOSTEL MANAGEMENT SYSTEM</p>
        <p className="text-center ">Login</p>
        <Input
          type={"email"}
          placeholder={"Enter your email"}
          field={"Webmail"}
        />
        <Input
          type={"password"}
          placeholder={"Enter your password"}
          field={"Password"}
        />
        <button className="btn btn-dark px-4 text-light w-100">Sign in</button>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
        <p className="text-center my-3 text-secondary">
          <u>
            <small>Forgot password</small>
          </u>
        </p>
        <p className="text-center ">
          Don't have an account ?, <span className="signup">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
