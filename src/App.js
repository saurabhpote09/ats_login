import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import VerifyAccount from './pages/VerifyAccount'
import ATSdashboard from './pages/ATSdashboard'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/verify-account' element={<VerifyAccount />} />
          <Route path='/dashboard' element={<ATSdashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App