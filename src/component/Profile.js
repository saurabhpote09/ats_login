import React from "react";
import profile from "../assets/icon/profilesection.svg";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import cameraInput from '../assets/icon/cameraInput.svg'

function Title ({text}){
  return (
    <>
     <h1 className="text-lg font-medium leading-6 ">{text}</h1>
    </>
  )
}
const Profile = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="mb-5">
       <Title text={'Profile'}/>
        </div>
        <div className="rounded border border-[#EAEAEA] shadow-lg p-4">
          <h1 className="font-medium text-base leading-[18px] mb-6 ">
            Edit Your Profile
          </h1>
          <div className="flex md:flex-row flex-col gap-6">
            <div>
              <div className="relative w-max">
                <img src={profile} alt="" />
                <label htmlFor="profilePhoto">
                <img src={cameraInput} alt="" className="absolute right-0 bottom-0" />
                </label>
                <input type="file" name="profilePhoto" id="profilePhoto" className="hidden"/>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-center md:flex-row flex-col gap-4 mb-4 items-center">
                <div className="md:w-1/2 w-full  ">
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="fname" text="First Name" />
                  <Input type="text" id="fname" />
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="lname" text="Last Name" />
                  <Input type="text" id="lname" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:flex-row flex-col gap-4 mb-4 items-center">
                <div className="md:w-1/2 w-full">
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="email" text="Email" />
                  <Input type="email" id="email" />
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="address" text="Address" />
                  <Input type="text" id="address" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:flex-row flex-col gap-4 mb-4 items-center">
                <div className="md:w-1/2 w-full">
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="country" text="Country" />
                  <Select></Select>
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="city" text="City" />
                  <Select></Select>
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:flex-row flex-col gap-4 mb-6 items-center">
                <div className="md:w-1/2 w-full ">
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="phone" text="Phone Number" />
                  <Input type="text" id="phone" />
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="orgname" text="Organization Name" />
                  <Input type="text" id="orgname" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex w-[102px] justify-end ">
                  <Button text={"Save"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
