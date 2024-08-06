import React, { useState } from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Profile from "../component/Profile";
import Footer from "../component/Footer";
import Client from "../component/Client";

const ATSclient = () => {
  const [isNavshow, setIsNavshow] = useState(true);
  return (
    <>
      <Header setIsNavshow={setIsNavshow} isNavshow={isNavshow} />
      <div className="flex flex-col md:flex-row">
        {isNavshow ? (
          <div className=" basis-full md:basis-1/5">
            <Navbar isNavshow={isNavshow} />
          </div>
        ) : (
          ""
        )}
        <div className="flex-1 p-6">
          <Client />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ATSclient;
