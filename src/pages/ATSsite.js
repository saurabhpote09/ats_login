import React, { useState } from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Site from '../component/Site'
import Footer from '../component/Footer'

const ATSsite = () => {
    const [activeTab, setActiveTab] = useState('Sites');
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
                <div className="flex-1 p-6">
                    <Site />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default ATSsite