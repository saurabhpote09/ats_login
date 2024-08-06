import React from 'react'
import logo from '../assest/ATS.svg'
import Title from '../component/Title'
import Label from '../component/Label'
import Input from '../component/Input'
import Subtitle from '../component/Subtitle'
import Links from '../component/Links'
import Button from '../component/Button'
const ForgetPassword = () => {
    return (
        <div className='bg-[#F7F7F8] min-h-screen flex flex-col gap-10 items-center px-4 sm:px-6 lg:px-8 pt-16  '>
            <div>
                <img src={logo} alt="Logo" className='' />
            </div>
            <div className='bg-white p-6 sm:p-8 lg:p-10 w-full max-w-md shadow-lg'>
                <div className=' mb-6 sm:mb-10'>
                    <Title title={'Forgot Password'} />
                    <Subtitle subtitle={'Enter your email for the verification process. We will '} />
                    <Subtitle subtitle={'send a code to your email.'} />
                </div>
                <form>
                    <div className='mb-10'>
                        <Label htmlFor={'email'} text={'Email'} />
                        <Input type={'email'} id={'email'} />
                    </div>
                    <Button text={'Sign in'} />
                    <p className='font-normal text-xs text-center mt-4'>Never mind, I remember my password. Back to  <Links text={'Sign in'} to={'/'} /></p>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword