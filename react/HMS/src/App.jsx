import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Hostels from './pages/Hostels'
import { DataProvider } from './utilities/DataContext'
import { AuthProvider } from './utilities/AuthContext'
const App = () => {
  return (
    <>
    <DataProvider>
      <AuthProvider>
     {/* <Login/>  */}
      </AuthProvider>
     {/* <Home/>  */}
      <Hostels />  
    </DataProvider>
    </>
  )
}

export default App
