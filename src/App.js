import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyAccount from "./pages/VerifyAccount";
import ATSdashboard from "./pages/ATSdashboard";
import ATSprofile from "./pages/ATSprofile";
import ATSclient from "./pages/ATSclient";
import ATSsite from "./pages/ATSsite";
import ATSsite1 from "./pages/ATSsite1";
import ApiIntegration from "./pages/ApiIntegration";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
          <Route path="/dashboard" element={<ATSdashboard />} />
          <Route path="/profile" element={<ATSprofile />} />
          <Route path="/client" element={<ATSclient />} />
          <Route path="/site" element={<ATSsite />} />
          <Route path="/site1" element={<ATSsite1 />} />
          <Route path="/api-integration" element={<ApiIntegration />} />
          <Route path="/redux" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
