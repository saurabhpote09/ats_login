import React from "react";
import profile from "../assets/icon/profilesection.svg";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
const Profile = () => {
  return (
    <>
    <div className="min-h-screen">
      <h1 className="text-lg font-medium leading-6 mb-5">Profile</h1>
      <div className="rounded border border-[#EAEAEA] shadow-lg p-4">
        <h1 className="font-medium text-base leading-[18px] mb-6 ">
          Edit Your Profile
        </h1>
        <div className="flex gap-6">
          <div>
            <img src={profile} />
          </div>
          <div className="flex-1">
            <div className="flex justify-center gap-4 mb-4 items-center">
              <div className="w-1/2 ">
                <Label htmlFor="fname" text="First Name" />
                <Input type="text" id="fname" />
              </div>
              <div className="w-1/2">
                <Label htmlFor="lname" text="Last Name" />
                <Input type="text" id="lname" />
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-4 items-center">
              <div className="w-1/2">
                <Label htmlFor="email" text="Email" />
                <Input type="email" id="email" />
              </div>
              <div className="w-1/2">
                <Label htmlFor="address" text="Address" />
                <Input type="text" id="address" />
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-4 items-center">
              <div className="w-1/2">
                <Label htmlFor="country" text="Country" />
                <Select></Select>
              </div>
              <div className="w-1/2">
                <Label htmlFor="city" text="City" />
                <Select></Select>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-6 items-center">
              <div className="w-1/2 ">
                <Label htmlFor="phone" text="Phone Number" />
                <Input type="text" id="phone" />
              </div>
              <div className="w-1/2">
                <Label htmlFor="orgname" text="Organization Name" />
                <Input type="text" id="orgname" />
              </div>
            </div>
            <div className="flex justify-end">
            <div className="flex w-[102px] justify-end ">
                <Button text={'Save'}/>
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
