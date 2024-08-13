import React from 'react';

import dashboard from '../assets/icon/dashboard.svg';
import sites from '../assets/icon/sites.svg';
import team from '../assets/icon/team.svg';
import setting from '../assets/icon/setting.svg';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = ({activeTab}) => {
    
const navigate = useNavigate()
    const navItems = [
        { src: dashboard, alt: 'Dashboard', label: 'Dashboard', navigate :'/dashboard' },
        { src: sites, alt: 'Sites', label: 'Sites', navigate:'/site' },

        { src: team, alt: 'Team', label: 'Team' },

        { src: setting, alt: 'Settings', label: 'Settings' },
    ];

    return (
        <nav className="px-6 py-4 h-full lg:min-h-screen flex flex-col bg-gray-100">
            <ul className="flex flex-col gap-y-2">
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`flex items-center p-3 gap-x-3 rounded transition duration-300 ${activeTab === item.label ? 'bg-[#E7D5FF]' : 'hover:bg-[#E7D5FF]'}`}
                        onClick={()=>{navigate(item.navigate)}}

                    >
                        <img src={item.src} alt={item.alt} className={`size-5`}  />
                        <span className="font-medium text-sm">{item.label}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
