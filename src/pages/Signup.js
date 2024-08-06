import React from 'react';
import logo from '../assest/ATS.svg';
import Title from '../component/Title';
import Label from '../component/Label';
import Input from '../component/Input';
import Button from '../component/Button';
import Links from '../component/Links';
import Subtitle from '../component/Subtitle';
import Checkbox from '../component/Checkbox';

const Signup = () => {
    return (
        <div className='bg-[#F7F7F8] min-h-screen flex flex-col gap-10 items-center py-4 sm:py-6 lg:py-8 justify-center '>
            <div>
                <img src={logo} alt="Logo"/>
            </div>
            <div className='bg-white p-6 sm:p-8 lg:p-10 w-full max-w-md shadow-lg'>
                <div className=' mb-6 sm:mb-10'>
                <Title title='Create your account' />
                <Subtitle subtitle={'Enter your credentials to access your account.'} />
                </div>
                <form>
                    <div className='flex justify-center gap-x-4 flex-col sm:flex-row'>
                        <div className='mb-4'>
                            <Label htmlFor="fname" text="First Name" />
                            <Input type="text" id="fname" />
                        </div>
                        <div className='mb-4'>
                            <Label htmlFor="lname" text="Last Name" />
                            <Input type="text" id="lname" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <Label htmlFor="email" text="Email" />
                        <Input type="email" id="email" />
                    </div>
                    <div className='mb-4'>
                        <Label htmlFor="number" text="Contact Number" />
                        <Input type="tel" id="number" />
                    </div>
                    <div className='mb-4'>
                        <Label htmlFor="password" text="Password" />
                        <Input type="password" id="password" />
                    </div>
                    <div className='mb-4'>
                        <Label htmlFor="confirm-password" text="Confirm Password" />
                        <Input type="password" id="confirm-password" />
                    </div>
                    <div className='mb-6 sm:mb-10'>
                        <div className='flex items-center gap-x-3 mb-4 sm:mb-0'>
                            <Checkbox/>
                            <p className='text-xs leading-4 font-medium text-black '>
                                I agree to ATS's  <span className='font-semibold text-[#882EFD] cursor-pointer'>Terms of Service.</span>
                            </p>
                        </div>
                    </div>
                    <Button text="Sign up" />
                    <p className='font-normal text-xs text-center mt-4'>
                        Already have an ATS account? <Links text="Sign in" to="/" />
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
