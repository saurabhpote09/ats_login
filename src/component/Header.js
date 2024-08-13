import React from 'react';

import navButton from '../assets/icon/navButton.svg';
import add from '../assets/icon/add.svg';
import search from '../assets/icon/search.svg';
import bell from '../assets/icon/bell.svg';
import notification from '../assets/icon/notification.svg';
import question from '../assets/icon/question.svg';
import downarrow from '../assets/icon/downArrow.svg';
import restart from '../assets/icon/restart.svg';
import Logo from '../assets/ATS.svg';
import profile from '../assets/icon/profile.svg';
import { useNavigate } from 'react-router-dom';

const Header = ({ setIsNavshow, isNavshow }) => {
    const navigate = useNavigate()
    return (
        <header className="flex flex-wrap justify-between items-center w-full p-4 border-b ">
            <div className="flex items-center mb-1 md:mb-0 gap-x-10 gap-y-4 lg:gap-[131px] w-full flex-wrap md:flex-nowrap md:w-[40%]">
                <div className='flex items-center gap-4 md:gap-[26px]'>

                    <img src={navButton} alt="Navigation Button" className="w-5 h-5 md:w-auto md:h-auto " />

                    <img src={Logo} alt="V-Maintain Logo" className="" />
                </div>
                <select className="bg-[#F7F7F8] border-[#EAEAEA] border w-full md:w-[320px] text-gray-900 text-sm rounded block p-2.5 font-medium">
                    <option className="text-gray-700">Workspace Name</option>
                </select>
            </div>
            <div className="flex items-center justify-end gap-2 lg:gap-4 w-full md:w-auto">
                <img src={search} alt="Search" className="hidden sm:block" />
                <img src={notification} alt="Notifications" className="hidden sm:block" />
                <img src={restart} alt="Restart" className="hidden sm:block" />
                <img src={question} alt="Help" className="hidden sm:block" />
                <img src={bell} alt="Alerts" className="hidden sm:block" />
                <img src={add} alt="Add" className="hidden sm:block" />
                <img src={profile} alt="Profile" className="hidden sm:block cursor-pointer" onClick={()=>{navigate('/profile')}} />
                <img src={downarrow} alt="Profile Dropdown" className="hidden sm:block" />
            </div>
        </header>
    );
};

export default Header;
