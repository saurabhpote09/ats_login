import React, { useState } from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Profile from "../component/Profile";

const ATSprofile = () => {
  const [isNavshow, setIsNavshow] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');
  return (
    <>
    
      <Header setIsNavshow={setIsNavshow} isNavshow={isNavshow} />
      <div className="flex flex-col lg:flex-row">
        {isNavshow ? (
          <div className=" basis-full xl:basis-[15%] lg:basis-1/5">
            <Navbar isNavshow={isNavshow} activeTab={activeTab} />
          </div>
        ) : (
          ""
        )}
        <div className="flex-1 p-6">
          <Profile />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ATSprofile;
