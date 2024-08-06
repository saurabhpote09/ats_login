import React from 'react'

const Button = ({text, type = 'button'}) => {
  return (
    <button type={type} className='w-full rounded-lg bg-[#882EFD] font-semibold text-base leading-3 text-center py-3 sm:py-4 text-white'>{text}</button>
  )
}

export default Button