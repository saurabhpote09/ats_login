import React from 'react'
import logo from '../assest/ATS.svg'
import Title from '../component/Title'
import Subtitle from '../component/Subtitle'
import Label from '../component/Label'
import Input from '../component/Input'
import Links from '../component/Links'
import Button from '../component/Button'
const ResetPassword = () => {
    return (
        <div className='bg-[#F7F7F8] min-h-screen flex flex-col gap-10 items-center px-4 sm:px-6 lg:px-8 pt-16  '>
            <div>
                <img src={logo} alt="Logo" className='' />
            </div>
            <div className='bg-white p-6 sm:p-8 lg:p-10 w-full max-w-md shadow-lg'>
                <div className=' mb-6 sm:mb-10'>
                    <Title title={'Reset Password'} />
                    <Subtitle subtitle={'Set the new password for your account, so you can sign in and access all the features.'} />
                </div>
                <form>
                    <div className='mb-4'>
                        <Label text={'Verification code'} />
                        <div className='flex gap-3 items-center justify-center'>
                            <Input />
                            <Input />
                            <Input />
                            <p className='text-[#999999] font-normal text-base'>-</p>
                            <Input />
                            <Input />
                            <Input />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <Label htmlFor={'password'} text={'Password'} />
                        <Input type={'password'} id={'password'} />
                    </div>
                    <div className='mb-10'>
                        <Label htmlFor="confirm-password" text="Confirm Password" />
                        <Input type="password" id="confirm-password" />
                    </div>
                    <Button text={'Reset Password'} />
                    <p className='font-normal text-xs text-center mt-4'>Never mind, I remember my password. Back to <Links text={'Sign in'} to={'/'} /></p>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword