import {createContext, useState, useEffect} from 'react'

const AuthContext= createContext({})
export const AuthProvider=({children})=>{
    let [isAuthenticated, setIsAuthenticated] = useState(false)
    let [username, setUsername] =useState('')
    let [password, setPassword] =useState('')
    let signin=()=>{
        if (username.length < 0 || password.length < 0){
            alert('Please provide the username and password')
        }
        if(username === "dante" && password == "0000"){
            setIsAuthenticated(true)
            console.log(isAuthenticated)
        }

    }
    return(
        <AuthContext.Provider value={{isAuthenticated, signin, setUsername, setPassword}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext