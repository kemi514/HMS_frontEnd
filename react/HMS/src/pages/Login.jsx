import {useContext} from "react";
import Input from "../components/Input";
import AuthContext from "../utilities/AuthContext";
const Login = () => {
  let {isAuthenticated, signin, setUsername, setPassword} = useContext(AuthContext)
  return (
   
    <form className="login d-flex align-items-center justify-content-center" onSubmit={()=>alert(9)}>
       {console.log(isAuthenticated)}
      <div className="container rounded shadow-md p-5">
        <p className="text-center ">HOSTEL MANAGEMENT SYSTEM</p>
        <p className="text-center ">Login</p>
        <Input
          type={"email"}
          placeholder={"Enter your email"}
          field={"Webmail"}
          name={'username'}
          Update={(e)=>setUsername(e.target.value)}
        />
        <Input
          type={"password"}
          placeholder={"Enter your password"}
          field={"Password"}
          name={'password'}
          Update={(e)=>setPassword(e.target.value)}
        />
        <input className="btn btn-dark px-4 text-light w-100" value="Sign in"/>
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
    </form>
  );
};

export default Login;
