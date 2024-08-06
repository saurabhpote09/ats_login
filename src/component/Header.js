import React from 'react';

import navButton from '../assets/icon/navButton.svg'
import add from '../assets/icon/add.svg';
import search from '../assets/icon/search.svg';
import bell from '../assets/icon/bell.svg';
import notification from '../assets/icon/notification.svg';
import question from '../assets/icon/question.svg';
import downarrow from '../assets/icon/downArrow.svg';
import restart from '../assets/icon/restart.svg';
import Logo from '../assets/ATS.svg';
import profile from '../assets/icon/profile.svg';

const Header = ({ setIsNavshow, isNavshow }) => {
    return (
        <header className="flex flex-wrap justify-between items-center w-full p-4 border-b ">
            <div className="flex items-center md:mb-1 gap-10 w-[40%]">
                <button onClick={() => { setIsNavshow(!isNavshow) }}> <img src={navButton} alt="Navigation Button" className=" cursor-pointer" /></button>
                <img src={Logo} alt="V-Maintain Logo" className="" />


                <select class="bg-[#F7F7F8] border-[#EAEAEA] border min-w-[320px] text-gray-900 text-sm rounded block p-2.5 font-medium">
                <option className="text-gray-700">Option 1</option>
        <option className="text-gray-700">Option 2</option>
        <option className="text-gray-700">Option 3</option>
                </select>



            </div>
            <div className="w-full lg:w-max flex items-center justify-end gap-x-4 ">
                <img src={search} alt="Search" className="hidden md:block " />
                <img src={notification} alt="Notifications" className="hidden md:block " />
                <img src={restart} alt="Restart" className="hidden md:block " />
                <img src={question} alt="Help" className="hidden md:block " />
                <img src={bell} alt="Alerts" className="hidden md:block " />
                <img src={add} alt="Add" className="hidden md:block " />
                <img src={profile} alt="Profile" className="hidden md:block " />
                <img src={downarrow} alt="Profile Dropdown" className="hidden md:block " />
            </div>
        </header>
    );
};

export default Header;
