import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { IoIosSearch } from "react-icons/io";
import Card from '../components/Card';
import AddButton from '../components/AddButton';
import Loader from '../components/Loader';
import axios from 'axios'



function Home() {

  const [notes,setNotes]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    axios.get('http://localhost:3000/note/active')
    .then((res)=>{
      setNotes(res.data.data);
      setLoading(false)
      console.log(res.data)
    })
    .catch((err)=>
    console.log(err)
    )
  },[])


  
  return (
    <div className='flex p-5 h-full max-h-fit bg-slate-100'>
      <SideBar/>
      <div className='w-full md:w-5/6 bg-white rounded-2xl pl-2 pb-5'>
      <div className='flex items-center justify-between'>
          <div className='w-1/2 m-5 rounded-full p-2 bg-slate-100 flex items-center justify-between'>
            <input type="text" id='search' className='w-2/3 p-1 bg-slate-100 focus:outline-none' placeholder='Search anything'/>
            <div className='p-3 bg-white rounded-full'>
            <IoIosSearch/>
            </div>
          </div>
            <select name="" id="" className='mr-5 sm:hidden p-3 border-2 w-[8rem] text-slate-400 border-slate-400 rounded-full'>
              <option value="">Home</option>
              <option value="">Form</option>
            </select>
         </div>

          {loading?(<Loader/>):(

            <div class="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 pl-4">
            {notes.map((item)=>(
              <Card key={item._id} data={item}/>
              ))}

          </div>
              )}
          <AddButton/>
         
        </div>
    </div>
  )
}

export default Home