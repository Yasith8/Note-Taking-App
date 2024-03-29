import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Loader from '../components/Loader';




function DeletedNote() {
  const {id}=useParams();
  const [notes,setNotes]=useState({});
  const [isActive,setIsActive]=useState("");
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate()

  //get spesific note
  useEffect(()=>{
    setLoading(true)
    axios.get(`https://note-taking-app-backend-six.vercel.app/note/${id}`)
    .then((res)=>{
      setNotes(res.data);
      setLoading(false)
      setIsActive(res.data.isActive)
      
    })
    .catch((err)=>
    console.log(err)
    )
  },[id])

  //when click delete button user can do restore or delete item
  const submitHandler=()=>{
      axios.put(`https://note-taking-app-backend-six.vercel.app/note/delete/${id}`)
      .then(()=>{
        alert(notes.title+` has been ${isActive?"added":"removed"} to recycle bin`);
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
    <div>
      {loading?(<Loader/>):(

        <div className='flex p-5 h-screen w-screen max-h-fit bg-slate-900'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-10 min-w-[25rem] w-fit h-[10rem] flex flex-col items-center'>
        <div className='flex items-center justify-center'>

          {/* 
          dynamically displayed 
             if it is deleted card-> show msg to resote that card
             if it is active card-> show msg to delete that card
          */}
          <h1 className='text-[1.3rem] font-bold'>Are you sure to {isActive?('Delete'):('Restore')} {notes.title}?</h1>
        </div>
        <div className='flex w-[100%] items-center justify-center gap-7 mt-5'>
          <button className='w-[5rem] md:w-[10rem] h-[3rem] bg-transparent rounded-lg font-bold border-2 border-black text-black' onClick={backHandler}>Cancel</button>
          <button className='w-[5rem] md:w-[10rem] h-[3rem] bg-red-600 rounded-lg font-bold border-2 border-red-600 text-white' onClick={submitHandler}>Yes</button>
        </div>
      </div>
    </div>
      )}
    </div>
  )
}

export default DeletedNote