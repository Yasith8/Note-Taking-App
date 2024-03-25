import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";


function AddButton({destination='/addnote'}) {
  return (
    <Link to={destination}> 
    <div className='rounded-full p-5 flex items-center justify-center bg-black text-white w-[5rem] h-[5rem] fixed top-[30rem] left-[20rem] sm:hidden'>
        <FaPlus/>
    </div>
    </Link>
  )
}

export default AddButton