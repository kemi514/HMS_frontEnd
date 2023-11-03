import { createContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  let navigate = useNavigate();

  //keep track of user login
  let [isAuthenticated, setIsAuthenticated] = useState(false);

  //user login details
  const [user, setUser] = useState({
    name: "test user",
    password: "1234",
  });

  //account login variables
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  //account creation variables
  let [newProfilePicture,setNewProfilePicture] = useState()
  let [newFullname, setNewFullname] = useState("");
  let [newEmail, setNewEmail] = useState("");
  let [newAddress, setNewAddress] = useState("");
  let [newContact, setNewContact] = useState("");
  let [newPassword1, setNewPassword1] = useState("");
  let [newPassword2, setNewPassword2] = useState("");
  let signup = () => {
    if (newFullname) {
      if (newEmail) {
        if (newContact) {
          if (newAddress) {
            if (newPassword1 && newPassword2) {
              if (newPassword1 === newPassword2) {
                let newUser = {
                  fullname: newFullname,
                  email: newEmail,
                  address: newAddress,
                  contact: newContact,
                  password: newPassword1,
                };
                console.log(newUser)
              } else {
                alert("please provide matching passwords");
              }
            } else {
              alert("password fields are required");
            }
          } else {
            alert("you are required to provide your address");
          }
        } else {
          alert("please provide your contact");
        }
      } else {
        alert("please provide your email");
      }
    } else {
      alert("please provide your name");
    }
  };
  let signin = async () => {
    if (username == user.name && password == user.password) {
      setIsAuthenticated(true);
      navigate("/hostels");
    }
  };
  return (
    <AuthContext.Provider
      value={{

        //variables
        isAuthenticated,
        username,
        password,
        newAddress,
        newContact,
        newEmail,
        newFullname,
        newPassword1,
        newPassword2,
        newProfilePicture,
        //functions
        signup,
        signin,
        setUsername,
        setPassword,
        setNewFullname,
        setNewAddress,
        setNewEmail,
        setNewContact,
        setNewPassword1,
        setNewPassword2,
        setNewProfilePicture
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
