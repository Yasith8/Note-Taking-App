import React from 'react'
import '../App.css'

import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";



function Card() {
  return (
    <div className='sm:w-[10rem] md:w-[18rem] lg:w-[22rem] h-[11rem] bg-slate-200 rounded-2xl p-3 flex flex-col justify-between mt-4'>
      <div className='flex justify-end'>
        <div className='border-[1px] border-slate-400 text-slate-600 text-[10px] font-semibold px-2 rounded-full'>Home</div>
      </div>
        <div className='text-[1.1rem] font-bold'>Titdfgdfgdgdfgdgdfgdfgfdgle</div>
        <div className='div-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique odit necessitatibus vero! Animi labore commodi deserunt! Odio vitae, 
            possimus vel commodi dolorum, voluptas reprehenderit nobis sunt, voluptatibus labore est.
        </div>
        <div className='flex justify-between items-end'>
      <div className='p-2 w-[5rem] h-3 rounded-s-lg rounded-sm bg-green-400'></div>
        <div className='flex gap-3 justify-end'>
            <div className='p-2 bg-green-300 rounded-full'><FaEye/></div>
            <div className='p-2 bg-orange-300 rounded-full'><FiEdit/></div>
            <div className='p-2 bg-red-300 rounded-full'><MdDeleteOutline/></div>
        </div>
        </div>
    </div>
  )
}

export default Card