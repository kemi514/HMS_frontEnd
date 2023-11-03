import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Hostels from './pages/Hostels'
import { DataProvider } from './utilities/DataContext'
import { AuthProvider } from './utilities/AuthContext'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
const App = () => {
  return (
    <>

    <DataProvider>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/hostels' element={<Hostels/>}/>
        </Routes>
      </AuthProvider>
    </DataProvider>
    </>
  )
}

export default App
