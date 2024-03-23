import React from 'react'
import { Link } from 'react-router-dom'
import { IoChevronBack } from "react-icons/io5";


function BackButton() {
  return (
    <div className='w-10 h-10 flex items-center justify-center m-5 bg-slate-200 rounded-full'>
    <Link to="/">
    <IoChevronBack/>
    </Link>
    </div>
  )
}

export default BackButton