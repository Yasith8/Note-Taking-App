import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import BackButton from '../components/BackButton'
import '../App.css'
import axios from 'axios'

function AddNote() {

  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const[categorySelect,setCategorySelect]=useState('');
  const[categoryInput,setCategoryInput]=useState('');
  const [color,setColor]=useState('#000000');

  const [categoryList,setCategoryList]=useState([])

  const[loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    axios.get('http://localhost:3000/category')
    .then((res)=>{
      setLoading(false)
      setCategoryList(res.data)
    })
    .catch((err)=>{
      setLoading(false)
      alert("This system has following errors\n",err)
    })
  },[])


  const submitHandler=(e)=>{
    e.preventDefault();
    if(!title||!content){
      return alert('Please fill out all fields')
    }else{
      let categoryValue;

      if(categorySelect=="" || categorySelect=="none"){
        categoryValue=categoryInput;
      }
      else if(categoryInput==""){
        categoryValue=categorySelect;
      }

      const newNote={
        title:title,
        content:content,
        category:categoryValue,
        color:color
      }

      axios.post('http://localhost:3000/note',newNote)
      .then((res)=>{
        alert("Note Added Successfully")
        setTitle("");
        setContent("");
        setColor("#ffffff");
        setCategoryInput("");
        setCategorySelect("");
      })

      .catch((err)=>{
        alert("system has following errors\n",err)
      })
      
    }

  }
  return (
    <div className='h-screen max-h-fit  flex md:p-5 md:h-screen bg-slate-100'>
      <SideBar/>
      <div className='w-screen m-2 md:w-5/6 bg-white rounded-2xl pl-2'>
        <BackButton/>

        <div className='m-6 border-2 p-5 border-black rounded-2xl min-h-[30rem] max-h-fit'>
          <form onSubmit={submitHandler}>

          <table className='flex flex-col'>
            <tr>
              <td className="left-tr">
          <label htmlFor="">Title</label>
              </td>
              <td>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  className='p-3 border-2 border-slate-400 md:min-w-[25rem] rounded-lg'/>
              </td>
            </tr>
            <tr>
              <td className="left-tr">
          <label htmlFor="">Content</label>
              </td>
              <td>
                <textarea id="" cols="30" rows="5" value={content} onChange={(e)=>setContent(e.target.value)} className='p-3 border-2 border-slate-400 w-[11rem] md:min-w-[25rem] rounded-lg'></textarea>
              </td>
            </tr>
            <tr>
              <td className="left-tr">
          <label htmlFor="">Category</label>
              </td>
              <td>
                <select name="" id="" className='w-[6rem] md:w-[10rem] h-[2rem] border-2 border-slate-400' onChange={(e)=>setCategorySelect(e.target.value)}>
                  <option value="" selected disabled>Select Category...</option>
                  <option value="none" selected disabled>--none--</option>
                  {categoryList.map((item)=>(
                    <option key={item._id} value={categorySelect} >{item.name}</option>
                  ))}
                </select>
                <input type="text" value={categoryInput} onChange={(e)=>setCategoryInput(e.target.value)} className='border-2 border-slate-400' placeholder='Create new category...'/>
              </td>
              <td>If you need to create new, add --none-- to dropdown menu</td>
            </tr>
            <tr>
              <td className="left-tr">
          <label htmlFor="">Color</label>
              </td>
              <td className='w-[25rem] flex justify-between items-center'>
                <input type='color' value={color} onChange={(e)=>{setColor(e.target.value)}} className=''/>
                <h1>{color}</h1>
              </td>
            </tr>
            <tr className='flex justify-end mt-[3rem]'>
              <td><button type='reset' className='w-[5rem] md:w-[10rem] h-[3rem] bg-transparent rounded-lg font-bold border-2 border-black text-black  hover:bg-black hover:text-white'>Clear</button></td>
              <td><button type='submit' className='w-[5rem] md:w-[10rem] h-[3rem] bg-black rounded-lg font-bold border-2 border-black text-white '>Submit</button></td>
            </tr>
          </table>
          </form>
        </div>
        </div>
    </div>
  )
}

export default AddNote