import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { TiDelete } from "react-icons/ti";
import axios  from 'axios';
import Loader from '../components/Loader';
import DeletedCard from '../components/DeletedCard';
import { Link } from 'react-router-dom';


function DeletedNotesList() {
    const [notes,setNotes]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    axios.get('http://localhost:3000/note/inactive')
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
        <div className='flex items-center justify-end'>
            <Link to='/removenote' className='m-5 rounded-full p-4 bg-red-600 text-white font-bold flex items-center justify-center gap-2'>
              <TiDelete/>
              <button>Empty Recycle Bin</button>
            </Link>
              
           </div>
  
            {loading?(<Loader/>):(
  
              <div class="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 pl-4">
              {notes.map((item)=>(
                <DeletedCard key={item._id} data={item}/>
                ))}
  
            </div>
                )}
        
           
          </div>
      </div>
    )
}

export default DeletedNotesList