import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import BackButton from '../components/BackButton'
import {useParams} from 'react-router-dom'
import axios from 'axios'


function ViewNote() {
    const {id}=useParams();

    const [notes,setNotes]=useState({});
    const [category,setCategory]=useState({});
    const [categoryId,setCategoryId]=useState("");
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/note/${id}`)
    .then((res)=>{
      setNotes(res.data.data);
      setLoading(false)
      setCategoryId(res.data.category)
      axios.get(`http://localhost:3000/note/${categoryId}`)
      .then((res)=>setCategory(res.data))
      .catch((err)=>console.log(err))
    })
    .catch((err)=>
    console.log(err)
    )
  },[])

  return (
    <div className='h-screen max-h-fit  flex md:p-5 md:h-screen bg-slate-100'>
      <SideBar/>
      <div className='w-screen m-2 md:w-5/6 bg-white rounded-2xl pl-2'>
        <BackButton/>

        <div className='m-6 border-2 p-5 border-black rounded-2xl min-h-[30rem] max-h-fit'>
          <form>

          <table className='flex flex-col'>
            <tr>
              <td className="left-tr">
          <label htmlFor="">Title</label>
              </td>
              <td>
               {notes.title}
              </td>
            </tr>
            <tr>
              <td className="left-tr">
          <label htmlFor="">Content</label>
              </td>
              <td>
                {notes.content}
              </td>
            </tr>
            <tr>
              <td className="left-tr">
          <label htmlFor="">Category</label>
              </td>
              <td>
                {category}
              </td>
            </tr>
          </table>
          </form>
        </div>
        </div>
    </div>
  )
}

export default ViewNote