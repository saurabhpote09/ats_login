import React from 'react';
import logo from '../assest/ATS.svg';
import Title from '../component/Title';
import Subtitle from '../component/Subtitle';
import Label from '../component/Label';
import Input from '../component/Input';
import Links from '../component/Links';
import Button from '../component/Button';

const Login = () => {
    return (
        <div className='bg-[#F7F7F8] min-h-screen flex flex-col gap-10 items-center px-4 sm:px-6 lg:px-8 pt-16  '>
            <div>
                <img src={logo} alt="Logo" className=''/>
            </div>
            <div className='bg-white p-6 sm:p-8 lg:p-10 w-full max-w-md shadow-lg'>
                <div className='mb-6 sm:mb-10'>
                <Title title = {'Sign in to your account'}/>
                <Subtitle subtitle={'Enter your credentials to access your account.'}/>
                </div>
                <form>
                    <div className='mb-4'>
                        <Label htmlFor={'email'} text={'Email'} />
                        <Input type={'email'} id={'email'} />
                    </div>
                    <div className='mb-4'>
                        <Label htmlFor={'password'} text={'Password'} />
                        <Input type={'password'} id={'password'} />
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between mb-6 sm:mb-10'>
                        <div className='flex items-center gap-x-3 mb-4 sm:mb-0'>
                            <input type="checkbox" className='w-4 h-4 accent-[#882EFD] bg-[#F7F7F8] rounded' />
                            <label className='text-xs leading-4 font-medium text-black flex items-center'>Remember me
                            </label>
                        </div>
                        <Links to={'/forget-password'} text={'Forgot your password?'} />
                    </div>
                    <Button text={'Sign in'} />
                    <p className='font-normal text-xs text-center mt-4'>Don't have an ATS account? <Links text={'Sign up'} to={'/signup'} /></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
