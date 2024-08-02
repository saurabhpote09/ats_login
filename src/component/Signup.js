import React from 'react'
import logo from '../assest/ATS.svg';
const Signup = () => {
    return (
        <div className='bg-[#F7F7F8] min-h-screen flex flex-col gap-10 items-center px-4 sm:px-6 lg:px-8 justify-center  '>
            <div>
                <img src={logo} alt="Logo" className='' />
            </div>
            <div className='bg-white p-6 sm:p-8 lg:p-10 w-full max-w-md shadow-lg'>
                <h1 className='text-[24px] sm:text-[28px] font-bold text-center leading-[42px]'>Create your account</h1>
                <p className='font-normal text-xs leading-[18px] text-center mb-6 sm:mb-10'>Enter your details.</p>

                <form>
                    <div className='flex justify-center gap-4 items-center'>
                        <div className='mb-4'>
                            <label htmlFor="fname" className='font-medium text-sm leading-4'>First Name</label>
                            <input type="text" id="fname" className='w-full border border-[#EAEAEA] rounded-lg bg-[#F7F7F8] py-2 px-3' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="lname" className='font-medium text-sm leading-4'>Last Name</label>
                            <input type="text" id="lname" className='w-full border border-[#EAEAEA] rounded-lg bg-[#F7F7F8] py-2 px-3' />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='font-medium text-sm leading-4'>Email</label>
                        <input type="email" id="email" className='w-full border border-[#EAEAEA] rounded-lg bg-[#F7F7F8] py-2 px-3' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="number" className='font-medium text-sm leading-4'>Contact Number</label>
                        <input type="tel" id="number" className='w-full border border-[#EAEAEA] rounded-lg bg-[#F7F7F8] py-2 px-3' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='font-medium text-sm leading-4'>Password</label>
                        <input type="password" id="password" className='w-full border border-[#EAEAEA] rounded-lg bg-[#F7F7F8] py-2 px-3' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='font-medium text-sm leading-4'>Confirm Password</label>
                        <input type="password" id="password" className='w-full border border-[#EAEAEA] rounded-lg bg-[#F7F7F8] py-2 px-3' />
                    </div>
                    <div className='mb-6 sm:mb-10'>
                        <div className='flex items-center gap-x-3 mb-4 sm:mb-0'>
                            <input type="checkbox" className='w-4 h-4 accent-[#882EFD] bg-[#F7F7F8] rounded' />
                            <p  className='text-xs leading-4 font-medium text-black '>
                                I agree to ATS's  <span className='font-semibold text-[#882EFD] cursor-pointer'>Terms of Service.</span>
                            </p>
                        </div>
                    </div>
                    <button type="submit" className='w-full rounded-lg bg-[#882EFD] font-semibold text-base leading-3 text-center py-3 sm:py-4 text-white'>Sign up</button>
                    <p className='font-normal text-xs text-center mt-4'>Already have an ATS account?  <span className='font-semibold text-[#882EFD] cursor-pointer'>Sign in</span></p>
                </form>
            </div>
        </div>
    )
}

export default Signup