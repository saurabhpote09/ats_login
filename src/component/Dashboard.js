import React from 'react';
import Card from './Card';

import global from '../assets/icon/global.svg';
import uptrend from '../assets/icon/uptrend.svg';
import activesites from '../assets/icon/activesites.svg';
import availableupdates from '../assets/icon/refresh (1) 1.svg';
import siteshealth from '../assets/icon/sitehealth.svg';
import add from '../assets/icon/add1.svg';
import edit from '../assets/icon/edit (1) 1.svg';
import eye from '../assets/icon/eye 1.svg';
import site from '../assets/icon/site-alt 1.svg';
import more from '../assets/icon/more.svg';
import group from '../assets/icon/Group.svg';
import downtrend from '../assets/icon/downtrend.svg'

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const cardData = [
        { icon: global, number: '197', label: 'Total Websites', trendIcon: uptrend, trend: '100%' },
        { icon: activesites, number: '3/197', label: 'Active Sites', trendIcon: downtrend, trend: '1.5%' },
        { icon: availableupdates, number: '23', label: 'Available Updates', trendIcon: uptrend, trend: '11.68%' },
        { icon: siteshealth, number: '07', label: 'Sites Health', trendIcon: uptrend, trend: '3.75%' },
    ];
    const data = [
        { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
        { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
        { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
        { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
        { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
        { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
        { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
    ];

    return (
        <>
            <h1 className='text-lg font-medium mb-5'>Dashboard</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        number={card.number}
                        label={card.label}
                        trendIcon={card.trendIcon}
                        trend={card.trend}
                    />
                ))}
            </div>

            <div className='mt-4 flex flex-col lg:flex-row gap-4'>
                <div className='w-full lg:w-[65%] bg-white shadow-md rounded p-4 border-[#EAEAEA] border'>
                    <div className='flex justify-between w-full'>
                        <h1 className='font-semibold text-base'>Clients</h1>
                        <img src={add} alt="Add" />
                    </div>
                    <h1 className='text-sm
                    mt-2 mb-4 font-normal'>Client Information</h1>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 border ">
                                        <thead>
                                            <tr className='bg-[#F7F7F8] '>
                                                <th className="px-3 py-3 text-start font-semibold text-black text-sm">Client Name</th>
                                                <th className="px-3 py-3 text-start font-semibold text-black text-sm">Email</th>
                                                <th className="px-3 py-3 text-start font-semibold text-black text-sm">Contact</th>
                                                <th className="px-3 py-3 text-end font-semibold text-black"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">

                                            <tr >
                                                <td className="px-3 py-3 whitespace-nowrap text-sm font-normal text-black">{'Aditya Das'}</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-sm text-black">aditya.d@diginnovat...</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-sm text-black">+91 75291 64682</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-end text-sm font-medium">
                                                    <div className='flex justify-center gap-4'>
                                                        <img src={site} alt="Site" />
                                                        <img src={eye} alt="View" />
                                                        <img src={edit} alt="Edit" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td className="px-3 py-3 whitespace-nowrap text-sm font-normal text-black">Prachi Suryawanshi</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-sm text-black">prachi.s@diginnovat...</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-sm text-black">+91 93291 64780</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-end text-sm font-medium">
                                                    <div className='flex justify-center gap-4'>
                                                        <img src={site} alt="Site" />
                                                        <img src={eye} alt="View" />
                                                        <img src={edit} alt="Edit" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td className="px-3 py-3 whitespace-nowrap text-sm font-normal text-black">Dinesh Jain</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-sm text-black">dinesh.j@diginnovato...</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-sm text-black">+91 98091 60680</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-end text-sm font-medium">
                                                    <div className='flex justify-center gap-4'>
                                                        <img src={site} alt="Site" />
                                                        <img src={eye} alt="View" />
                                                        <img src={edit} alt="Edit" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td className="px-3 py-3 whitespace-nowrap text-sm font-normal text-black">Swati Singh</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-sm text-black">swati.s@diginnovator...</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-sm text-black">+91 89283 64682</td>
                                                <td className="px-3 py-3 whitespace-nowrap text-end text-sm font-medium">
                                                    <div className='flex justify-center gap-4'>
                                                        <img src={site} alt="Site" />
                                                        <img src={eye} alt="View" />
                                                        <img src={edit} alt="Edit" />
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[35%] bg-white shadow-md rounded p-4 border-[#EAEAEA]  border'>
                    <div className='flex justify-between my-2'>
                        <h1 className='font-semibold text-base leading-[18px]'>Update Overview</h1>
                        <img src={more} alt="More" />
                    </div>
                    <p className='font-normal text-sm leading-[18px]'>Last updated June 20, 2024</p>
                    <div className='flex items-center gap-[70px] mt-[18px] mb-4'>
                        <h1 className='font-medium text-base leading-5'>Total Updates</h1>
                        <h1 className='font-semibold text-base leading-5'>250</h1>
                    </div>
                    <table className='border border-[#EAEAEA] rounded w-full'>
                        <tbody className='rounded'>

                            <tr className='bg-[#F7F7F8] border-b border-[#EAEAEA]'>
                                <td className='p-3 font-normal text-sm leading-4'>Wordpress</td>
                                <td className='p-3 font-semibold text-base leading-4 text-center'>07</td>
                                <td className='p-3'>
                                    <div className='flex justify-end items-center gap-4'>
                                        <img src={eye} alt="View" />
                                        <img src={group} alt="Group" />
                                    </div>
                                </td>
                            </tr>
                            <tr className='bg-[#F7F7F8] border-b border-[#EAEAEA]'>
                                <td className='p-3 font-normal text-sm leading-4'>Plugins</td>
                                <td className='p-3 font-semibold text-base leading-4 text-center'>228</td>
                                <td className='p-3'>
                                    <div className='flex justify-end items-center gap-4'>
                                        <img src={eye} alt="View" />
                                        <img src={group} alt="Group" />
                                    </div>
                                </td>
                            </tr>
                            <tr className='bg-[#F7F7F8] border-b border-[#EAEAEA]'>
                                <td className='p-3 font-normal text-sm leading-4'>Themes</td>
                                <td className='p-3 font-semibold text-base leading-4 text-center'>28</td>
                                <td className='p-3'>
                                    <div className='flex justify-end items-center gap-4'>
                                        <img src={eye} alt="View" />
                                        <img src={group} alt="Group" />
                                    </div>
                                </td>
                            </tr>
                            <tr className='bg-[#F7F7F8] border-b border-[#EAEAEA]'>
                                <td className='p-3 font-normal text-sm leading-4'>Translation</td>
                                <td className='p-3 font-semibold text-base leading-4 text-center'>0</td>
                                <td className='p-3'>
                                    <div className='flex justify-end items-center gap-4'>
                                        <img src={eye} alt="View" />
                                        <img src={group} alt="Group" />
                                    </div>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>

            <div className='mt-4 flex flex-col lg:flex-row gap-4'>
                <div className='w-full lg:w-[65%] bg-white shadow-md rounded p-4 border-[#EAEAEA]  border'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-base leading-4'>Analytics</h1>
                        <div className='block lg:flex gap-6 self-end'>
                            <div className='flex items-center gap-3'>
                                <div className='w-[12px] h-[12px] bg-[#882EFD] rounded-full'></div>
                                <p className='font-normal text-sm leading-[18px]'>Dummy 1</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='w-[12px] h-[12px] bg-[#EA4242] rounded-full'></div>
                                <p className='font-normal text-sm leading-[18px]'>Dummy 2</p>
                            </div>
                            <select class="bg-[#F7F7F8] border-[#EAEAEA] border text-gray-900 text-sm rounded block p-2.5 font-medium">
                                <option selected className='font-medium'>This Week</option>
                            </select>
                        </div>
                    </div>
                    <h1 className='font-normal text-sm leading-[18px] mb-3'>Analytics Information</h1>
                    <div>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className='w-full lg:w-[35%] bg-white shadow-md rounded flex flex-col justify-between p-4 border-[#EAEAEA]  border'>
                    <div>
                        <div className='flex justify-between'>
                            <h1 className='font-semibold text-base leading-[18px]'>Response Rate</h1>
                            <img src={more} alt="" />
                        </div>
                        <p className='font-normal text-sm leading-[18px] mt-1'>Dummy Text</p>
                    </div>
                    <div>
                        <div className='flex justify-center items-center'>
                            <div className="relative size-[196px]">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="4"></circle>
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#882EFD]" strokeWidth="4" strokeDasharray="100" strokeDashoffset="65" strokeLinecap="square"></circle>
                                </svg>
                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 flex flex-col -translate-x-1/2">
                                    <span className="text-center text-[44px] font-bold text-black">35%</span>
                                    <span className="text-center text-base font-normal  text-black">Response Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex justify-between items-end'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-[12px] h-[12px] bg-[#882EFD] rounded-full'></div>
                                    <p className='font-normal text-sm leading-[18px]'>Responses : 276(69%)</p>
                                </div>
                                <p className='font-normal text-sm leading-[18px]'>Total Sent - 400</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-[12px] h-[12px] bg-[#E6E8EA] rounded-full'></div>
                                    <p className='font-normal text-sm leading-[18px]'>Non Responses : 124(31%)</p>
                                </div>
                                <p className='font-normal text-sm leading-[18px]'>Total Sent - 240</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Dashboard;
