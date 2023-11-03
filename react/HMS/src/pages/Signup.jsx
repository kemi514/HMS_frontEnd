import React, { useContext } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import AuthContext from "../utilities/AuthContext";
const Signup = () => {
  let {
    newAddress,
    newContact,
    newEmail,
    newFullname,
    newProfilePicture,
    newPassword1,
    newPassword2,
    setNewFullname,
    setNewAddress,
    setNewEmail,
    setNewContact,
    setNewPassword1,
    setNewPassword2,
    signup,
    setNewProfilePicture
  } = useContext(AuthContext);
  return (
    <form className="login  d-flex align-items-center justify-content-center">
      <div className="container rounded shadow-md p-5">
        <p className="text-center ">HOSTEL MANAGEMENT SYSTEM</p>
        <p className="text-center">Sign up form</p>
        <Input
          type={"text"}
          field={"Full Name"}
          Update={(e) => setNewFullname(e.target.value)}
          defaultvalue={newFullname}
        />
        <Input
          type={"email"}
          field={"Email"}
          Update={(e) => setNewEmail(e.target.value)}
          defaultvalue={newEmail}
        />
        <Input
          type={"text"}
          field={"Address"}
          Update={(e) => setNewAddress(e.target.value)}
          defaultvalue={newAddress}
        />
        <Input
          type={"number"}
          field={"Contact"}
          Update={(e) => setNewContact(e.target.value)}
          defaultvalue={newContact}
        />
        <Input
          type={"file"}
          field={"Select profile picture"}
          Update={(e) => setNewProfilePicture(e.currentTarget.files[0])}
        />
        <Input
          type={"password"}
          placeholder={"Enter your password"}
          field={"Password"}
          name={"password"}
          Update={(e) => setNewPassword1(e.target.value)}
          defaultvalue={newPassword1}
        />
        <Input
          type={"password"}
          placeholder={"Enter password again"}
          field={"Password confirmation"}
          name={"password"}
          Update={(e) => setNewPassword2(e.target.value)}
          defaultvalue={newPassword2}
        />
        
        <input
          className="btn p-2 btn-dark px-4 text-light w-100"
          value="Sign up"
          onClick={() => signup()}
        />
        <p className="text-center my-3 d-flex align-items-center justify-content-center">
          Have an account,{" "}
          <span className="signup">
            <Link to="/login" className="nav-link">
              {" "}
              &nbsp;Sign in
            </Link>
          </span>
        </p>
      </div>
    </form>
  );
};

export default Signup;
