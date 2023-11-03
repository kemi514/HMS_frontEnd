import {useContext} from "react";
import Input from "../components/Input";
import AuthContext from "../utilities/AuthContext";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

  let {isAuthenticated,username, password, signin, setUsername, setPassword} = useContext(AuthContext)

  // location = useLocation()
  // navigate = useNavigate()
  return (
   
    <form className="login d-flex align-items-center justify-content-center">
      <div className="container rounded shadow-md p-5">
        <p className="text-center ">HOSTEL MANAGEMENT SYSTEM</p>
        <p className="text-center ">Login</p>
        <Input
          type={"email"}
          placeholder={"Enter your email"}
          field={"Webmail"}
          name={'username'}
          Update={(e)=>setUsername(e.target.value)}
          defaultvalue={username}
        />
        <Input
          type={"password"}
          placeholder={"Enter your password"}
          field={"Password"}
          name={'password'}
          Update={(e)=>setPassword(e.target.value)}
          defaultvalue={password}
        />
        <input className="btn btn-dark px-4 text-light w-100" value="Sign in" onClick={()=>signin()}/>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
        <p className="text-center my-3 text-secondary">
          <u>
            <small>Forgot password</small>
          </u>
        </p>
        <p className="text-center d-flex justify-content-center">
          Don't have an account ?, <span className="signup"><Link to="/signup" className="nav-link">&nbsp;Sign up</Link></span>
        </p>
      </div>
    </form>
  );
};

export default Login;
