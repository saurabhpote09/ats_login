import React from 'react'

const Select = ({children}) => {
  return (
    <select className='w-full border border-[#EAEAEA] rounded-lg bg-[#F7F7F8] py-2 px-3'>
        {children}
    </select>
  )
}

export default Select