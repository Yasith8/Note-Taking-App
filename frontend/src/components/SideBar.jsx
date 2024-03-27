import React, { useEffect, useState } from "react";
import img from "../assets/logo.png";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";
import { MdOutlineArchive } from "react-icons/md";
import { MdRecycling } from "react-icons/md";
import { PiFolderNotchOpenLight } from "react-icons/pi";
import { HiPlusSm } from "react-icons/hi";
import { RiLifebuoyLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import axios from 'axios'

function SideBar() {
  const [category,setCategory]=useState([])
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    axios.get('http://localhost:3000/category')
    .then((res)=>{
      setLoading(false)
      setCategory(res.data)
    })
    .catch((err)=>{
      alert("Error Occured: "+err)
    })
  },[])
  return (
    <div className="hidden sm:block bg-slate-100 md:w-1/6 md:mx-2">
      <Link to='/' className="flex items-center ml-5">
        <img src={img} alt="" className="w-[10rem]" />
      </Link>
      <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
      <div className="flex flex-col justify-between gap-4 mt-2">
        <div className="flex flex-col">
          <Link to={"/addnote"} className="flex items-center gap-4 hover:bg-black hover:text-white p-2 pl-5 mx-4 justify-start my-1 rounded-md cursor-pointer">
            <IoMdAddCircleOutline />
            <span>Create Note</span>
          </Link>
            <label htmlFor="#search">
          <Link to={"/"} className="flex items-center gap-4 hover:bg-black hover:text-white p-2 pl-5 mx-4 justify-start my-1 rounded-md cursor-pointer">
            <IoSearchCircleOutline />
            <span>Search Note</span>
          </Link>
              </label>
          <Link to={"/deletednote"} className="flex items-center gap-4 hover:bg-black hover:text-white p-2 pl-5 mx-4 justify-start my-1 rounded-md cursor-pointer">
              <MdRecycling />
            <span>Deleted Notes</span>
          </Link>
        </div>
        <div>
          <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
          <div className="flex flex-col mt-4">
          </div>
        </div>
        <div>

          <div className="flex flex-col mt-4">
            <Link to='https://github.com/Yasith8/Note-Taking-App' target="_blank" className="flex items-center gap-4 text-gray-500 bg-slate-100  p-1 pl-[3.2rem] mx-4 justify-start rounded-md">
              <RiLifebuoyLine />
              Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
