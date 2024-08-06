import React from 'react'
import logo from '../assest/ATS.svg'
import Title from '../component/Title'
import Subtitle from '../component/Subtitle'

import Input from '../component/Input'
import Links from '../component/Links'
import Button from '../component/Button'

const VerifyAccount = () => {
  return (
    <div className='bg-[#F7F7F8] min-h-screen flex flex-col gap-10 items-center px-4 sm:px-6 lg:px-8 pt-16  '>
    <div>
        <img src={logo} alt="Logo" className='' />
    </div>
    <div className='bg-white p-6 sm:p-8 lg:p-10 w-full max-w-md shadow-lg'>
        <div className=' mb-6 sm:mb-10'>
        <Title title={'Verify your account'} />
        <Subtitle subtitle={'We have sent a code to: abc@pqr.com '} />
        <Subtitle subtitle={'Please check your email and enter the code we sent.'} />
        </div>
        <form>
            <div className='mb-10'>
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
            <Button text={'Verify Account'} />
            <p className='font-normal text-xs text-center mt-4'>You didn’t receive our email with verification code? Please check spam or  <Links text={'Resend'} to={'/'} /></p>
        </form>
    </div>
</div>
  )
}

export default VerifyAccount