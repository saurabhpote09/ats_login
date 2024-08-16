import React, { useState } from "react";
import Checkbox from "./Checkbox";

function MenuItem({ title }) {
  return (
    <>
      <p className="font-normal text-sm leading-[18px] ">{title}</p>
    </>
  );
}

const Site1 = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="mb-5 flex md:flex-row sm:flex-row items-center md:justify-between justify-center flex-wrap flex-col">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10 md:w-1/2 w-full ">
          <h1 className="text-lg font-medium">Sites</h1>
          <div className="flex items-center gap-x-3">
            <p className="font-normal text-sm leading-4">Shows</p>
            <select className="border border-[#EAEAEA] font-medium text-base leading-4 py-1 px-7">
              <option>10</option>
            </select>
            <p className="font-normal text-sm leading-4">entries</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-3 sm:mt-0 md:w-1/2 w-full">
          <div className="relative max-w-xs w-full sm:w-auto shadow-sm">
            <input
              type="text"
              className="block w-full pl-3 pr-10 py-2 border border-[#EAEAEA]  rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search"
              aria-label="Search Clients"
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
          <select className="font-normal text-sm leading-5 pr-20 rounded border border-[#EAEAEA] shadow-sm">
            <option>Filter By: Tag</option>
          </select>
          <select className="font-normal text-sm leading-5 pr-10 rounded border border-[#EAEAEA] shadow-sm">
            <option>Bulk Action</option>
          </select>
          <div className="border border-[#EAEAEA] shadow-sm p-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.83333 0H3.33333C2.44928 0 1.60143 0.348287 0.976311 0.968242C0.35119 1.5882 0 2.42904 0 3.30579L0 5.78512C0 6.66187 0.35119 7.50271 0.976311 8.12267C1.60143 8.74262 2.44928 9.09091 3.33333 9.09091H5.83333C6.71739 9.09091 7.56524 8.74262 8.19036 8.12267C8.81548 7.50271 9.16667 6.66187 9.16667 5.78512V3.30579C9.16667 2.42904 8.81548 1.5882 8.19036 0.968242C7.56524 0.348287 6.71739 0 5.83333 0ZM7.5 5.78512C7.5 6.2235 7.32441 6.64392 7.01184 6.9539C6.69928 7.26387 6.27536 7.43802 5.83333 7.43802H3.33333C2.89131 7.43802 2.46738 7.26387 2.15482 6.9539C1.84226 6.64392 1.66667 6.2235 1.66667 5.78512V3.30579C1.66667 2.86741 1.84226 2.44699 2.15482 2.13701C2.46738 1.82704 2.89131 1.65289 3.33333 1.65289H5.83333C6.27536 1.65289 6.69928 1.82704 7.01184 2.13701C7.32441 2.44699 7.5 2.86741 7.5 3.30579V5.78512Z"
                fill="black"
              />
              <path
                d="M16.6673 0H14.1673C13.2833 0 12.4354 0.348287 11.8103 0.968242C11.1852 1.5882 10.834 2.42904 10.834 3.30579V5.78512C10.834 6.66187 11.1852 7.50271 11.8103 8.12267C12.4354 8.74262 13.2833 9.09091 14.1673 9.09091H16.6673C17.5514 9.09091 18.3992 8.74262 19.0243 8.12267C19.6495 7.50271 20.0007 6.66187 20.0007 5.78512V3.30579C20.0007 2.42904 19.6495 1.5882 19.0243 0.968242C18.3992 0.348287 17.5514 0 16.6673 0ZM18.334 5.78512C18.334 6.2235 18.1584 6.64392 17.8458 6.9539C17.5333 7.26387 17.1093 7.43802 16.6673 7.43802H14.1673C13.7253 7.43802 13.3014 7.26387 12.9888 6.9539C12.6762 6.64392 12.5007 6.2235 12.5007 5.78512V3.30579C12.5007 2.86741 12.6762 2.44699 12.9888 2.13701C13.3014 1.82704 13.7253 1.65289 14.1673 1.65289H16.6673C17.1093 1.65289 17.5333 1.82704 17.8458 2.13701C18.1584 2.44699 18.334 2.86741 18.334 3.30579V5.78512Z"
                fill="black"
              />
              <path
                d="M5.83333 10.744H3.33333C2.44928 10.744 1.60143 11.0922 0.976311 11.7122C0.35119 12.3322 0 13.173 0 14.0497L0 16.5291C0 17.4058 0.35119 18.2467 0.976311 18.8666C1.60143 19.4866 2.44928 19.8349 3.33333 19.8349H5.83333C6.71739 19.8349 7.56524 19.4866 8.19036 18.8666C8.81548 18.2467 9.16667 17.4058 9.16667 16.5291V14.0497C9.16667 13.173 8.81548 12.3322 8.19036 11.7122C7.56524 11.0922 6.71739 10.744 5.83333 10.744ZM7.5 16.5291C7.5 16.9675 7.32441 17.3879 7.01184 17.6979C6.69928 18.0078 6.27536 18.182 5.83333 18.182H3.33333C2.89131 18.182 2.46738 18.0078 2.15482 17.6979C1.84226 17.3879 1.66667 16.9675 1.66667 16.5291V14.0497C1.66667 13.6114 1.84226 13.1909 2.15482 12.881C2.46738 12.571 2.89131 12.3969 3.33333 12.3969H5.83333C6.27536 12.3969 6.69928 12.571 7.01184 12.881C7.32441 13.1909 7.5 13.6114 7.5 14.0497V16.5291Z"
                fill="black"
              />
              <path
                d="M16.6673 10.9091H14.1673C13.2833 10.9091 12.4354 11.2574 11.8103 11.8774C11.1852 12.4973 10.834 13.3382 10.834 14.2149V16.6942C10.834 17.571 11.1852 18.4118 11.8103 19.0318C12.4354 19.6517 13.2833 20 14.1673 20H16.6673C17.5514 20 18.3992 19.6517 19.0243 19.0318C19.6495 18.4118 20.0007 17.571 20.0007 16.6942V14.2149C20.0007 13.3382 19.6495 12.4973 19.0243 11.8774C18.3992 11.2574 17.5514 10.9091 16.6673 10.9091ZM18.334 16.6942C18.334 17.1326 18.1584 17.553 17.8458 17.863C17.5333 18.173 17.1093 18.3471 16.6673 18.3471H14.1673C13.7253 18.3471 13.3014 18.173 12.9888 17.863C12.6762 17.553 12.5007 17.1326 12.5007 16.6942V14.2149C12.5007 13.7765 12.6762 13.3561 12.9888 13.0461C13.3014 12.7362 13.7253 12.562 14.1673 12.562H16.6673C17.1093 12.562 17.5333 12.7362 17.8458 13.0461C18.1584 13.3561 18.334 13.7765 18.334 14.2149V16.6942Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="border border-[#EAEAEA] rounded">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-[#F7F7F8]">
                <th className="p-2 w-[5%]">
                  <input
                    type="checkbox"
                    className="size-4 border rounded border-[#EAEAEA]"
                  />
                </th>
                <th className="font-semibold text-sm p-2 text-center w-[10%]">
                  WordPress
                </th>
                <th className="font-semibold text-sm p-2 text-center w-[10%]">
                  Plugins
                </th>
                <th className="font-semibold text-sm p-2 text-center w-[10%]">
                  Themes
                </th>
                <th className="font-semibold text-sm p-2 text-start w-[20%]">
                  Last Syn
                </th>
                <th className="font-semibold text-sm p-2 text-start w-[15%]">
                  Site Health
                </th>
                <th className="font-semibold text-sm p-2 text-start w-[10%]">
                  Status Code
                </th>
                <th className="font-semibold text-sm p-2 text-start w-[12%]">
                  Connected
                </th>
                <th className="p-2 float-right">
                  <div class="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          setIsShow(!isShow);
                        }}
                      >
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
                      </button>
                    </div>
                    {isShow ? (
                     <div
                     class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    
                   >
                     <div class="" role="none">
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"State"} />
                       </div>
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"Site"} />
                       </div>
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"Site URL"} />
                       </div>
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"Updates"} />
                       </div>
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"Plugins"} />
                       </div>
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"Themes"} />
                       </div>
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"Last Sync"} />
                       </div>
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"Site Health"} />
                       </div>
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"Status Code"} />
                       </div>
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"Connected"} />
                       </div>
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"Client"} />
                       </div>
                       <div class="px-4 py-2 flex justify-start items-center gap-x-3 bg-[#F4EBFF] border border-white">
                         <Checkbox />
                         <MenuItem title={"Tag"} />
                       </div>
                     </div>
                   </div>
                   
                    ) : (
                      ""
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={`bg-white border-b border-[#EAEAEA]`}>
                <td className="flex items-center justify-center p-2">
                  <input
                    type="checkbox"
                    className="size-4 border rounded border-[#EAEAEA]"
                  />
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-black text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#F9B023] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#00B656] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 24, 2024 - 4:52 PM
                </td>
                <td className="font-normal text-sm leading-4 p-3 ">
                  <div className="flex gap-2 items-center">
                    <div className="size-3 rounded-full bg-[#00B656] "></div>
                    <p>Good</p>
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">0 - OK</td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 01, 2024
                </td>
              </tr>
              <tr className={`bg-white border-b border-[#EAEAEA]`}>
                <td className="flex items-center justify-center p-2">
                  <input
                    type="checkbox"
                    className="size-4 border rounded border-[#EAEAEA]"
                  />
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-black text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#F9B023] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#00B656] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 24, 2024 - 4:52 PM
                </td>
                <td className="font-normal text-sm leading-4 p-3 ">
                  <div className="flex gap-2 items-center">
                    <div className="size-3 rounded-full bg-[#00B656] "></div>
                    <p>Good</p>
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">0 - OK</td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 01, 2024
                </td>
              </tr>
              <tr className={`bg-white border-b border-[#EAEAEA]`}>
                <td className="flex items-center justify-center p-2">
                  <input
                    type="checkbox"
                    className="size-4 border rounded border-[#EAEAEA]"
                  />
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-black text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#F9B023] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#00B656] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 24, 2024 - 4:52 PM
                </td>
                <td className="font-normal text-sm leading-4 p-3 ">
                  <div className="flex gap-2 items-center">
                    <div className="size-3 rounded-full bg-[#00B656] "></div>
                    <p>Good</p>
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">0 - OK</td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 01, 2024
                </td>
              </tr>
              <tr className={`bg-white border-b border-[#EAEAEA]`}>
                <td className="flex items-center justify-center p-2">
                  <input
                    type="checkbox"
                    className="size-4 border rounded border-[#EAEAEA]"
                  />
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-black text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#F9B023] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#00B656] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 24, 2024 - 4:52 PM
                </td>
                <td className="font-normal text-sm leading-4 p-3 ">
                  <div className="flex gap-2 items-center">
                    <div className="size-3 rounded-full bg-[#00B656] "></div>
                    <p>Good</p>
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">0 - OK</td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 01, 2024
                </td>
              </tr>
              <tr className={`bg-white border-b border-[#EAEAEA]`}>
                <td className="flex items-center justify-center p-2">
                  <input
                    type="checkbox"
                    className="size-4 border rounded border-[#EAEAEA]"
                  />
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-black text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#F9B023] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#00B656] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 24, 2024 - 4:52 PM
                </td>
                <td className="font-normal text-sm leading-4 p-3 ">
                  <div className="flex gap-2 items-center">
                    <div className="size-3 rounded-full bg-[#00B656] "></div>
                    <p>Good</p>
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">0 - OK</td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 01, 2024
                </td>
              </tr>
              <tr className={`bg-white border-b border-[#EAEAEA]`}>
                <td className="flex items-center justify-center p-2">
                  <input
                    type="checkbox"
                    className="size-4 border rounded border-[#EAEAEA]"
                  />
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-black text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#F9B023] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  <div className="px-4 py-[6px] text-white bg-[#00B656] text-center m-auto w-12 h-7 rounded">
                    0
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 24, 2024 - 4:52 PM
                </td>
                <td className="font-normal text-sm leading-4 p-3 ">
                  <div className="flex gap-2 items-center">
                    <div className="size-3 rounded-full bg-[#00B656] "></div>
                    <p>Good</p>
                  </div>
                </td>
                <td className="font-normal text-sm leading-4 p-3">0 - OK</td>
                <td className="font-normal text-sm leading-4 p-3">
                  May 01, 2024
                </td>
              </tr>
             
            </tbody>
          </table>
          <div className="flex items-center justify-between p-4 md:flex-row flex-col gap-3">
            <p className="font-normal text-sm leading-4 text-[#1C1C1C99] ">
              Showing 1 to 10 of 10 entries
            </p>

            <div className="flex items-center gap-3 ">
              <div className="size-7 rounded-full border border-[#1C1C1C66] flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                >
                  <mask id="path-1-inside-1_6_1686" fill="white">
                    <path d="M1.43676 3.96316L5.00676 0.393164C5.15249 0.248302 5.34962 0.166992 5.5551 0.166992C5.76058 0.166992 5.9577 0.248302 6.10343 0.393164C6.17633 0.465469 6.23419 0.551492 6.27368 0.646271C6.31317 0.74105 6.3335 0.84271 6.3335 0.945386C6.3335 1.04806 6.31317 1.14972 6.27368 1.2445C6.23419 1.33928 6.17633 1.4253 6.10343 1.49761L2.52565 5.05983C2.45275 5.13214 2.39489 5.21816 2.3554 5.31294C2.31592 5.40772 2.29559 5.50938 2.29559 5.61205C2.29559 5.71473 2.31592 5.81639 2.3554 5.91117C2.39489 6.00595 2.45275 6.09197 2.52565 6.16428L6.10343 9.7265C6.24989 9.87193 6.33258 10.0696 6.33331 10.276C6.33404 10.4824 6.25275 10.6806 6.10732 10.8271C5.96189 10.9735 5.76424 11.0562 5.55785 11.0569C5.35145 11.0577 5.15322 10.9764 5.00676 10.8309L1.43676 7.26094C0.999807 6.82344 0.754372 6.23039 0.754372 5.61205C0.754372 4.99372 0.999807 4.40067 1.43676 3.96316Z" />
                  </mask>
                  <path
                    d="M1.43676 3.96316L5.00676 0.393164C5.15249 0.248302 5.34962 0.166992 5.5551 0.166992C5.76058 0.166992 5.9577 0.248302 6.10343 0.393164C6.17633 0.465469 6.23419 0.551492 6.27368 0.646271C6.31317 0.74105 6.3335 0.84271 6.3335 0.945386C6.3335 1.04806 6.31317 1.14972 6.27368 1.2445C6.23419 1.33928 6.17633 1.4253 6.10343 1.49761L2.52565 5.05983C2.45275 5.13214 2.39489 5.21816 2.3554 5.31294C2.31592 5.40772 2.29559 5.50938 2.29559 5.61205C2.29559 5.71473 2.31592 5.81639 2.3554 5.91117C2.39489 6.00595 2.45275 6.09197 2.52565 6.16428L6.10343 9.7265C6.24989 9.87193 6.33258 10.0696 6.33331 10.276C6.33404 10.4824 6.25275 10.6806 6.10732 10.8271C5.96189 10.9735 5.76424 11.0562 5.55785 11.0569C5.35145 11.0577 5.15322 10.9764 5.00676 10.8309L1.43676 7.26094C0.999807 6.82344 0.754372 6.23039 0.754372 5.61205C0.754372 4.99372 0.999807 4.40067 1.43676 3.96316Z"
                    fill="#1C1C1C"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M1.43676 3.96316L-13.6576 -11.1124L-13.6482 -11.1218L1.43676 3.96316ZM5.00676 0.393164L-10.0782 -14.6918L-10.0557 -14.7142L-10.0332 -14.7366L5.00676 0.393164ZM5.5551 0.166992V-21.1663V0.166992ZM6.10343 0.393164L-8.91954 15.5398L-8.92806 15.5314L-8.93657 15.5229L6.10343 0.393164ZM6.10343 1.49761L-8.94861 -13.6202L-8.93409 -13.6346L-8.91954 -13.6491L6.10343 1.49761ZM2.52565 5.05983L17.5777 20.1776L17.5632 20.1921L17.5486 20.2065L2.52565 5.05983ZM2.29559 5.61205H23.6289H2.29559ZM2.52565 6.16428L17.5486 -8.98239L17.5632 -8.96796L17.5777 -8.9535L2.52565 6.16428ZM6.10343 9.7265L-8.92812 24.8647L-8.93837 24.8545L-8.94862 24.8443L6.10343 9.7265ZM5.00676 10.8309L-10.0248 25.9691L-10.0515 25.9425L-10.0782 25.9159L5.00676 10.8309ZM1.43676 7.26094L-13.6482 22.3459L-13.6576 22.3365L1.43676 7.26094ZM-13.6482 -11.1218L-10.0782 -14.6918L20.0917 15.4781L16.5217 19.0481L-13.6482 -11.1218ZM-10.0332 -14.7366C-5.89042 -18.8548 -0.286311 -21.1663 5.5551 -21.1663V21.5003C10.9855 21.5003 16.1954 19.3514 20.0468 15.5229L-10.0332 -14.7366ZM5.5551 -21.1663C11.3965 -21.1663 17.0006 -18.8548 21.1434 -14.7366L-8.93657 15.5229C-5.08522 19.3514 0.124623 21.5003 5.5551 21.5003V-21.1663ZM21.1264 -14.7535C23.1989 -12.698 24.8438 -10.2525 25.9663 -7.55803L-13.419 8.85057C-12.3754 11.3554 -10.8462 13.6289 -8.91954 15.5398L21.1264 -14.7535ZM25.9663 -7.55803C27.0889 -4.86361 27.6668 -1.97356 27.6668 0.945386H-14.9998C-14.9998 3.65899 -14.4625 6.34571 -13.419 8.85057L25.9663 -7.55803ZM27.6668 0.945386C27.6668 3.86434 27.0889 6.75438 25.9663 9.4488L-13.419 -6.9598C-14.4625 -4.45493 -14.9998 -1.76821 -14.9998 0.945386H27.6668ZM25.9663 9.4488C24.8438 12.1432 23.1989 14.5888 21.1264 16.6443L-8.91954 -13.6491C-10.8462 -11.7381 -12.3754 -9.46467 -13.419 -6.9598L25.9663 9.4488ZM21.1555 16.6154L17.5777 20.1776L-12.5264 -10.0579L-8.94861 -13.6202L21.1555 16.6154ZM17.5486 20.2065C19.4753 18.2956 21.0045 16.0221 22.0481 13.5172L-17.3372 -2.89136C-16.2147 -5.58579 -14.5698 -8.03131 -12.4973 -10.0868L17.5486 20.2065ZM22.0481 13.5172C23.0916 11.0124 23.6289 8.32565 23.6289 5.61205H-19.0377C-19.0377 2.6931 -18.4598 -0.196939 -17.3372 -2.89136L22.0481 13.5172ZM23.6289 5.61205C23.6289 2.89845 23.0916 0.211732 22.0481 -2.29313L-17.3372 14.1155C-18.4598 11.421 -19.0377 8.531 -19.0377 5.61205H23.6289ZM22.0481 -2.29313C21.0045 -4.798 19.4753 -7.07148 17.5486 -8.98239L-12.4973 21.3109C-14.5698 19.2554 -16.2147 16.8099 -17.3372 14.1155L22.0481 -2.29313ZM17.5777 -8.9535L21.1555 -5.39127L-8.94862 24.8443L-12.5264 21.282L17.5777 -8.9535ZM21.135 -5.41166C25.2963 -1.27964 27.6458 4.33624 27.6665 10.2006L-14.9999 10.3514C-14.9806 15.8029 -12.7965 21.0235 -8.92812 24.8647L21.135 -5.41166ZM27.6665 10.2006C27.6872 16.0649 25.3775 21.6973 21.2455 25.8586L-9.03084 -4.20449C-12.872 -0.336086 -15.0192 4.8998 -14.9999 10.3514L27.6665 10.2006ZM21.2455 25.8586C17.1135 30.0199 11.4976 32.3694 5.63323 32.3901L5.48246 -10.2763C0.0308766 -10.257 -5.18969 -8.07288 -9.03084 -4.20449L21.2455 25.8586ZM5.63323 32.3901C-0.231164 32.4109 -5.8635 30.1011 -10.0248 25.9691L20.0383 -4.30721C16.1699 -8.14834 10.9341 -10.2955 5.48246 -10.2763L5.63323 32.3901ZM-10.0782 25.9159L-13.6482 22.3459L16.5217 -7.824L20.0917 -4.254L-10.0782 25.9159ZM-13.6576 22.3365C-18.0895 17.899 -20.579 11.8838 -20.579 5.61205H22.0877C22.0877 0.577014 20.0892 -4.25212 16.5311 -7.81461L-13.6576 22.3365ZM-20.579 5.61205C-20.579 -0.659656 -18.0895 -6.6749 -13.6576 -11.1124L16.5311 19.0387C20.0892 15.4762 22.0877 10.6471 22.0877 5.61205H-20.579Z"
                    fill="#1C1C1C"
                    fill-opacity="0.4"
                    mask="url(#path-1-inside-1_6_1686)"
                  />
                </svg>
              </div>
              <div className="size-7 rounded-full bg-[#882EFD] flex justify-center items-center">
                <p className="font-medium text-xs leading-4 text-white">1</p>
              </div>
              <div className="size-7 rounded-full border border-[#882EFD] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                >
                  <path
                    d="M5.56336 3.96284L1.99336 0.392844C1.84763 0.247982 1.6505 0.166672 1.44502 0.166672C1.23955 0.166672 1.04242 0.247982 0.896691 0.392844C0.823791 0.465148 0.765929 0.551171 0.726443 0.645951C0.686956 0.74073 0.666626 0.84239 0.666626 0.945066C0.666626 1.04774 0.686956 1.1494 0.726443 1.24418C0.765929 1.33896 0.823791 1.42498 0.896691 1.49729L4.47447 5.05951C4.54737 5.13181 4.60523 5.21784 4.64472 5.31262C4.6842 5.4074 4.70453 5.50906 4.70453 5.61173C4.70453 5.71441 4.6842 5.81607 4.64472 5.91085C4.60523 6.00563 4.54737 6.09165 4.47447 6.16395L0.896691 9.72618C0.750233 9.8716 0.667544 10.0693 0.666814 10.2756C0.666085 10.482 0.747376 10.6803 0.892803 10.8267C1.03823 10.9732 1.23588 11.0559 1.44227 11.0566C1.64867 11.0573 1.8469 10.976 1.99336 10.8306L5.56336 7.26062C6.00031 6.82312 6.24575 6.23007 6.24575 5.61173C6.24575 4.9934 6.00031 4.40034 5.56336 3.96284Z"
                    fill="#882EFD"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Site1;