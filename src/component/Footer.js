import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between items-center mt-6'>
            <h1 className='font-medium text-xs leading-3'>Copyright ©2024 Diginnovators</h1>
            <div className='flex items-center gap-4'>
                <h1 className='text-[#882EFD] font-medium text-xs leading-3'>Privacy Policy</h1>
                <h1 className='text-[#882EFD] font-medium text-xs leading-3'>Terms of Conditions</h1>
            </div>
        </div>
    )
}

export default Footer