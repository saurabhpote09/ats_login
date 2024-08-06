import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({to ,  text}) => {
  return (
    <Link to={to} className='font-semibold text-xs leading-4 text-[#882EFD] cursor-pointer'>{text}</Link>
  )
}

export default Links