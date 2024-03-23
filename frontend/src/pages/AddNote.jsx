import React from 'react'
import SideBar from '../components/SideBar'
import BackButton from '../components/BackButton'
import '../App.css'

function AddNote() {
  return (
    <div className='flex p-5 h-screen bg-slate-100'>
      <SideBar/>
      <div className='w-5/6 bg-white rounded-2xl pl-2'>
        <BackButton/>

        <div className='m-6 border-2 p-5 border-black rounded-2xl min-h-[30rem] max-h-fit'>
          <form>

          <table className='flex flex-col'>
            <tr>
              <td className="left-tr">
          <label htmlFor="">Title</label>
              </td>
              <td>
                <input type="text"  className='p-3 border-2 border-slate-400 min-w-[25rem] rounded-lg'/>
              </td>
            </tr>
            <tr>
              <td className="left-tr">
          <label htmlFor="">Content</label>
              </td>
              <td>
                <textarea id="" cols="30" rows="5" className='p-3 border-2 border-slate-400 min-w-[25rem] rounded-lg'></textarea>
              </td>
            </tr>
            <tr>
              <td className="left-tr">
          <label htmlFor="">Category</label>
              </td>
              <td>
                <select name="" id="" className='w-[10rem] h-[2rem] border-2 border-slate-400'>
                  <option value="">Home</option>
                  <option value="">Home</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="left-tr">
          <label htmlFor="">Color</label>
              </td>
              <td className='w-[25rem] flex justify-between items-center'>
                <input type='color' className=''/>
                <h1>#ffffff</h1>
              </td>
            </tr>
            <tr className='flex justify-end mt-[3rem]'>
              <td><button type='reset' className='w-[10rem] h-[3rem] bg-transparent rounded-lg font-bold border-2 border-black text-black  hover:bg-black hover:text-white'>Clear</button></td>
              <td><button type='submit' className='w-[10rem] h-[3rem] bg-black rounded-lg font-bold border-2 border-black text-white '>Submit</button></td>
            </tr>
          </table>
          </form>
        </div>
        </div>
    </div>
  )
}

export default AddNote