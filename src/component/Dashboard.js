import React from "react";
import Card from "./Card";

import global from "../assets/icon/global.svg";
import uptrend from "../assets/icon/uptrend.svg";
import activesites from "../assets/icon/activesites.svg";
import availableupdates from "../assets/icon/refresh (1) 1.svg";
import siteshealth from "../assets/icon/sitehealth.svg";
import add from "../assets/icon/add1.svg";
import edit from "../assets/icon/edit (1) 1.svg";
import eye from "../assets/icon/eye 1.svg";
import site from "../assets/icon/site-alt 1.svg";
import more from "../assets/icon/more.svg";
import group from "../assets/icon/Group.svg";
import downtrend from "../assets/icon/downtrend.svg";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function TableHeading({ text }) {
  return (
    <>
      <th className="px-3 py-3 text-start font-semibold text-black text-sm">
        {text}
      </th>
    </>
  );
}

function TableData({ data }) {
  return (
    <>
      <td className="px-3 py-3 whitespace-nowrap text-sm font-normal text-black">
        {data}
      </td>
    </>
  );
}

function Title({ text }) {
  return (
    <>
      <h1 className="font-semibold text-base leading-[18px]">{text}</h1>
    </>
  );
}

function Subtitle({ text }) {
  return (
    <>
      <h1 className="text-sm font-normal leading-[18px] ">{text}</h1>
    </>
  );
}

const Dashboard = () => {
  const cardData = [
    {
      icon: global,
      number: "197",
      label: "Total Websites",
      trendIcon: uptrend,
      trend: "100%",
      textColour: "green",
    },
    {
      icon: activesites,
      number: "3/197",
      label: "Active Sites",
      trendIcon: downtrend,
      trend: "1.5%",
      textColour: "red",
    },
    {
      icon: availableupdates,
      number: "23",
      label: "Available Updates",
      trendIcon: uptrend,
      trend: "11.68%",
      textColour: "green",
    },
    {
      icon: siteshealth,
      number: "07",
      label: "Sites Health",
      trendIcon: uptrend,
      trend: "3.75%",
      textColour: "green",
    },
  ];
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <>
      <h1 className="text-lg font-medium mb-5">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            number={card.number}
            label={card.label}
            trendIcon={card.trendIcon}
            trend={card.trend}
            textColour={card.textColour}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[65%] bg-white shadow-md rounded p-4 border-[#EAEAEA] border">
          <div className="flex justify-between w-full">
            <Title text={"Client"} />
            <img src={add} alt="Add" />
          </div>
          <div className=" mt-2 mb-4">
            <Subtitle text={"Clients Information"} />
          </div>

          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 border ">
                    <thead>
                      <tr className="bg-[#F7F7F8] ">
                        <TableHeading text={"Client Name"} />
                        <TableHeading text={"Email"} />
                        <TableHeading text={"Contact"} />
                        <TableHeading />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        {
                          fname: "Aditya Das",
                          email: "aditya.d@diginnovat...",
                          contact: "+91 75291 64682",
                        },
                        {
                          fname: "Prachi Suryawanshi",
                          email: "prachi.s@diginnovat...",
                          contact: "+91 93291 64780",
                        },
                        {
                          fname: "Dinesh Jain",
                          email: "dinesh.j@diginnovato...",
                          contact: "+91 98091 60680",
                        },
                        {
                          fname: "Swati Singh",
                          email: "swati.s@diginnovator...",
                          contact: "+91 89283 64682",
                        },
                      ].map((person) => {
                        return (
                          <tr>
                            <TableData data={person.fname} />
                            <TableData data={person.email} />
                            <TableData data={person.contact} />
                            <td className="px-3 py-3 whitespace-nowrap text-end text-sm font-medium">
                              <div className="flex justify-center gap-4">
                                <img src={site} alt="Site" />
                                <img src={eye} alt="View" />
                                <img src={edit} alt="Edit" />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[35%] bg-white shadow-md rounded p-4 border-[#EAEAEA]  border">
          <div className="flex justify-between my-2">
            <Title text={"Update Overview"} />
            <img src={more} alt="More" />
          </div>
          <Subtitle text={"Last updated June 20, 2024"} />
          <div className="flex items-center gap-[70px] mt-[18px] mb-4">
            <h1 className="font-medium text-base leading-5">Total Updates</h1>
            <h1 className="font-semibold text-base leading-5">250</h1>
          </div>
          <table className="border border-[#EAEAEA] rounded w-full">
            <tbody className="rounded">
              <tr className="bg-[#F7F7F8] border-b border-[#EAEAEA]">
                <td className="p-3 font-normal text-sm leading-4">Wordpress</td>
                <td className="p-3 font-semibold text-base leading-4 text-center">
                  07
                </td>
                <td className="p-3">
                  <div className="flex justify-end items-center gap-4">
                    <img src={eye} alt="View" />
                    <img src={group} alt="Group" />
                  </div>
                </td>
              </tr>
              <tr className="bg-[#F7F7F8] border-b border-[#EAEAEA]">
                <td className="p-3 font-normal text-sm leading-4">Plugins</td>
                <td className="p-3 font-semibold text-base leading-4 text-center">
                  228
                </td>
                <td className="p-3">
                  <div className="flex justify-end items-center gap-4">
                    <img src={eye} alt="View" />
                    <img src={group} alt="Group" />
                  </div>
                </td>
              </tr>
              <tr className="bg-[#F7F7F8] border-b border-[#EAEAEA]">
                <td className="p-3 font-normal text-sm leading-4">Themes</td>
                <td className="p-3 font-semibold text-base leading-4 text-center">
                  28
                </td>
                <td className="p-3">
                  <div className="flex justify-end items-center gap-4">
                    <img src={eye} alt="View" />
                    <img src={group} alt="Group" />
                  </div>
                </td>
              </tr>
              <tr className="bg-[#F7F7F8] border-b border-[#EAEAEA]">
                <td className="p-3 font-normal text-sm leading-4">
                  Translation
                </td>
                <td className="p-3 font-semibold text-base leading-4 text-center">
                  0
                </td>
                <td className="p-3">
                  <div className="flex justify-end items-center gap-4">
                    <img src={eye} alt="View" />
                    <img src={group} alt="Group" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[65%] bg-white shadow-md rounded p-4 border-[#EAEAEA]  border">
          <div className="flex items-center justify-between">
            <Title text={"Analytics"} />
            <div className="block lg:flex gap-6 self-end">
              <div className="flex items-center gap-3">
                <div className="w-[12px] h-[12px] bg-[#882EFD] rounded-full"></div>
                <Subtitle text={"Dummy 1"} />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[12px] h-[12px] bg-[#EA4242] rounded-full"></div>
                <Subtitle text={"Dummy 2"} />
              </div>
              <select class="w-[120px] h-[34px] font-normal text-sm leading-[18px] pr-2 border border-[#EAEAEA] rounded bg-[#F7F7F8] ">
                <option selected className="font-medium">
                  This Week
                </option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <Subtitle text={"Analytics Information"} />
          </div>
          <div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
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

        <div className="w-full lg:w-[35%] bg-white shadow-md rounded flex flex-col justify-between p-4 border-[#EAEAEA]  border">
          <div>
            <div className="flex justify-between">
              <Title text={"Response Rate"} />
              <img src={more} alt="" />
            </div>
            <div className="mt-1">
              <Subtitle text={"Dummy Text"} />
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <div className="relative size-[196px]">
                <svg
                  className="size-full -rotate-90"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200"
                    strokeWidth="4"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-[#882EFD]"
                    strokeWidth="4"
                    strokeDasharray="100"
                    strokeDashoffset="65"
                    strokeLinecap="square"
                  ></circle>
                </svg>
                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 flex flex-col -translate-x-1/2">
                  <span className="text-center text-[44px] font-bold text-black">
                    35%
                  </span>
                  <span className="text-center text-base font-normal  text-black">
                    Response Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                  <div className="w-[12px] h-[12px] bg-[#882EFD] rounded-full"></div>
                <Subtitle text={'Responses : 276(69%)'} />
                </div>
                <Subtitle text={'Total Sent - 400'}/>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-[12px] h-[12px] bg-[#E6E8EA] rounded-full"></div>
                  <Subtitle text={'Non Responses : 124(31%)'}/>
                </div>
                <Subtitle text={'Comments - 240'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
