import React, { useState } from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Site1 from "../component/Site1";

const ATSsite1 = () => {
  const [activeTab, setActiveTab] = useState("Sites");
  const [isNavshow, setIsNavshow] = useState(true);
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
        <div className="flex-1 p-2 sm:p-6 h-screen overflow-auto no-scrollbar">
          <Site1 />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ATSsite1;
