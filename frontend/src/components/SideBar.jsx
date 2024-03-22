import React from "react";
import img from "../assets/logo.png";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";
import { MdOutlineArchive } from "react-icons/md";
import { MdRecycling } from "react-icons/md";
import { PiFolderNotchOpenLight } from "react-icons/pi";
import { HiPlusSm } from "react-icons/hi";
import { RiLifebuoyLine } from "react-icons/ri";

function SideBar() {
  return (
    <div className="w-1/6 bg-slate-100 mx-2">
      <div className="flex items-center ml-5">
        <img src={img} alt="" className="w-[10rem]" />
      </div>
      <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
      <div className="flex flex-col justify-between gap-4 mt-2">
        <div className="flex flex-col">
          <button className="flex items-center gap-4 hover:bg-black hover:text-white p-2 pl-5 mx-4 justify-start my-1 rounded-md">
            <IoMdAddCircleOutline />
            <span>Create Note</span>
          </button>
          <button className="flex items-center gap-4 hover:bg-black hover:text-white p-2 pl-5 mx-4 justify-start my-1 rounded-md">
            <IoSearchCircleOutline />
            <span>Search Note</span>
          </button>
          <button className="flex items-center gap-4 hover:bg-black hover:text-white p-2 pl-5 mx-4 justify-start my-1 rounded-md">
            <MdRecycling />
            <span>Deleted Notes</span>
          </button>
        </div>
        <div>
          <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
          <div className="flex flex-col mt-4">
            <div className="flex items-center gap-4 text-gray-700 bg-slate-200  p-2 pl-5 mx-4 justify-evenly my-1 rounded-md">
              <PiFolderNotchOpenLight />
              <span>Categories</span>
              <button>
                <HiPlusSm />
              </button>
            </div>
            {/* static items set start*/}
            <button className="flex items-center gap-4 text-gray-500 bg-slate-100  p-1 pl-[3.2rem] mx-4 justify-start rounded-md">
              Home
            </button>
            <button className="flex items-center gap-4 text-gray-500 bg-slate-100  p-1 pl-[3.2rem] mx-4 justify-start rounded-md">
              Todo
            </button>
            {/* static items set end */}
          </div>
        </div>
        <div>
          <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
          <div className="flex flex-col mt-4">
            <button className="flex items-center gap-4 text-gray-500 bg-slate-100  p-1 pl-[3.2rem] mx-4 justify-start rounded-md">
              <RiLifebuoyLine />
              Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
