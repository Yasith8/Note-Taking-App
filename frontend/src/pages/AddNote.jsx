import React from 'react'
import SideBar from '../components/SideBar'
import BackButton from '../components/BackButton'

function AddNote() {
  return (
    <div className='flex p-5 h-screen bg-slate-100'>
      <SideBar/>
      <div className='w-5/6 bg-white rounded-2xl pl-2'>
        <BackButton/>

        <div>
          <label htmlFor="">Title</label>
        </div>
        </div>
    </div>
  )
}

export default AddNote