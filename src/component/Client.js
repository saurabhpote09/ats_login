import React from "react";
import addbtn from "../assets/icon/addbtn.svg";
import refresh from "../assets/icon/Mask group.svg";
import deleteicon from "../assets/icon/Group 29889.svg";
const Client = () => {
  return (
    <>
      <div className="mb-5 flex items-center justify-between ">
        <div className="flex items-center gap-10">
          <h1 className="text-lg font-medium">Client</h1>
          <div className="flex items-center gap-x-3">
            <p className="font-normal text-sm leading-4">Shows</p>
            <select className="border border-[#EAEAEA] font-medium text-base leading-4">
              <option>10</option>
            </select>
            <p className="font-normal text-sm leading-4">entries</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative max-w-xs min-w-[180px] ">
            <input
              type="text"
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.42-1.42l4.387 4.387a1 1 0 11-1.414 1.414L12.9 14.32zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <button
            className="bg-[#882EFD] rounded text-white font-semibold text-sm leading-[21px] w-[136px] py-[10px] px-[16px] flex items-center justify-center gap-2
          "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M14 6.99976C14 7.25436 13.8989 7.49854 13.7189 7.67858C13.5389 7.85861 13.2948 7.95976 13.0403 7.95976H7.95967V13.0398C7.95967 13.2944 7.85857 13.5385 7.67859 13.7186C7.49862 13.8986 7.25452 13.9998 7 13.9998C6.74548 13.9998 6.50138 13.8986 6.32141 13.7186C6.14143 13.5385 6.04033 13.2944 6.04033 13.0398V7.95976H0.959674C0.705153 7.95976 0.461056 7.85861 0.281082 7.67858C0.101108 7.49854 0 7.25436 0 6.99976C0 6.74515 0.101108 6.50097 0.281082 6.32093C0.461056 6.1409 0.705153 6.03976 0.959674 6.03976H6.04033V0.959756C6.04033 0.705148 6.14143 0.460969 6.32141 0.280934C6.50138 0.100899 6.74548 -0.000244141 7 -0.000244141C7.25452 -0.000244141 7.49862 0.100899 7.67859 0.280934C7.85857 0.460969 7.95967 0.705148 7.95967 0.959756V6.03976H13.0403C13.2948 6.03976 13.5389 6.1409 13.7189 6.32093C13.8989 6.50097 14 6.74515 14 6.99976Z"
                fill="white"
              />
            </svg>{" "}
            <span>Add Client</span>
          </button>
        </div>
      </div>

      <div className="border border-[#EAEAEA] rounded ">
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="p-4">
            <th className="p-2 w-[5%]">
              <input
                type="checkbox"
                className="size-4 border rounded border-[#EAEAEA]"
              />
            </th>
            <th className="font-semibold text-sm p-2 text-start w-[25%]">Email</th>
            <th className="font-semibold text-sm p-2 text-start w-[12%]">Client</th>
            <th className="font-semibold text-sm p-2 text-start w-[12%]">Role</th>
            <th className="font-semibold text-sm p-2 text-start w-[12%]">Status</th>
            <th className="font-semibold text-sm p-2 text-start w-[12%]">Created</th>
            <th className="font-semibold text-sm p-2 text-center w-[12%]">Action</th>
            <th className="font-semibold text-sm p-2 w-[10%] flex justify-end">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="#1C1C1C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#1C1C1C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#1C1C1C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white p-4">
            <td className="flex items-center justify-center p-2">
              <input
                type="checkbox"
                className="size-4 border rounded border-[#EAEAEA]"
              />
            </td>
            <td className="font-normal text-sm leading-4 p-2">
              johnsmith+testing@gmail.com
            </td>
            <td className="font-normal text-sm leading-4 p-2">John Smith</td>
            <td className="font-normal text-sm leading-4 p-2">Owner</td>
            <td className="font-normal text-sm leading-4 p-2">Registered</td>
            <td className="font-normal text-sm leading-4 p-2">July 25, 2024</td>
            <td className="font-normal text-sm leading-4 p-2 flex justify-center items-center gap-4">
              <img src={refresh} alt="Refresh" />
              <img src={deleteicon} alt="Delete" />
            </td>
            <td className="font-normal text-sm leading-4 p-2">g</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
    </>
  );
};

export default Client;
