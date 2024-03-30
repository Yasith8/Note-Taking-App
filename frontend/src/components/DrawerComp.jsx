import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import img from "../assets/logo.png";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";
import { MdRecycling } from "react-icons/md";
import { RiLifebuoyLine } from "react-icons/ri";

function DrawerComp() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className=" mr-5">
      <Space>
        <Button
          type="primary"
          onClick={showDrawer}
          className="bg-black sm:hidden"
        >
          <GiHamburgerMenu />
        </Button>
      </Space>
      <Drawer
        title="Diary Menu"
        placement="left"
        width={500}
        onClose={onClose}
        open={open}
      >
        <Link to="/" className="flex items-center ml-5">
          <img src={img} alt="" className="w-[10rem]" />
        </Link>
        <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
        <div className="flex flex-col justify-between gap-4 mt-2">
          <div className="flex flex-col">
            <Link
              to={"/addnote"}
              className="flex items-center gap-4 hover:bg-black hover:text-white p-2 pl-5 mx-4 justify-start my-1 rounded-md cursor-pointer"
            >
              <IoMdAddCircleOutline />
              <span>Create Note</span>
            </Link>
            <Link
              to={"/deletednote"}
              className="flex items-center gap-4 hover:bg-black hover:text-white p-2 pl-5 mx-4 justify-start my-1 rounded-md cursor-pointer"
            >
              <MdRecycling />
              <span>Deleted Notes</span>
            </Link>
          </div>
          <div>
            <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
            <div className="flex flex-col mt-4"></div>
          </div>
          <div>
            <div className="flex flex-col mt-4">
              <Link
                to="https://github.com/Yasith8/Note-Taking-App"
                target="_blank"
                className="flex items-center gap-4 text-gray-800   p-1 pl-[3.2rem] mx-4 justify-start rounded-md"
              >
                <RiLifebuoyLine />
                Help
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerComp;
