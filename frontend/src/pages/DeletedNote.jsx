import React from 'react'
import SideBar from '../components/SideBar'
import { IoIosSearch } from "react-icons/io";
import Card from '../components/Card';


function DeletedNote() {
  const df=[1,2,3,4,5,6]
  return (
    <div className='flex p-5 h-screen bg-slate-100'>
      <SideBar/>
        <div className='w-5/6 bg-white rounded-2xl pl-2'>
          <div className='w-1/2 m-5 rounded-full p-2 bg-slate-100 flex items-center justify-between'>
            <input type="text" id='search' className='w-2/3 p-1 bg-slate-100 focus:outline-none' placeholder='Search anything'/>
            <div className='p-3 bg-white rounded-full'>
            <IoIosSearch/>
            </div>
          </div>

          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 pl-4">
            {df.map(()=>(
              <Card/>

            ))}

          

          </div>
        </div>
    </div>
  )
}

export default DeletedNote