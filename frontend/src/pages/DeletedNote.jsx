import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'




function DeletedNote() {
  const {id}=useParams();
  const [notes,setNotes]=useState({});
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate()

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/note/${id}`)
    .then((res)=>{
      setNotes(res.data);
      setLoading(false)
      console.log(categoryId)
      
    })
    .catch((err)=>
    console.log(err)
    )
  },[id])

  const submitHandler=()=>{
      axios.put(`http://localhost:3000/note/delete/${id}`)
      .then(()=>{
        alert(notes.title+" has been added to recycle bin");
        navigate('/')
      })
      .catch((err)=>{
        alert("This process has following errors\n"+err)
      })
  }

  const backHandler=()=>{
    navigate("/")
  }

  return (
    <div className='flex p-5 h-screen w-screen max-h-fit bg-slate-900'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-10 min-w-[25rem] w-fit h-[10rem] flex flex-col items-center'>
        <div className='flex items-center justify-center'>
          <h1 className='text-[1.3rem] font-bold'>Are you sure to delete {notes.title}?</h1>
        </div>
        <div className='flex w-[100%] items-center justify-center gap-7 mt-5'>
          <button className='w-[5rem] md:w-[10rem] h-[3rem] bg-transparent rounded-lg font-bold border-2 border-black text-black' onClick={backHandler}>Cancel</button>
          <button className='w-[5rem] md:w-[10rem] h-[3rem] bg-red-600 rounded-lg font-bold border-2 border-red-600 text-white' onClick={submitHandler}>Yes</button>
        </div>
      </div>
    </div>
  )
}

export default DeletedNote