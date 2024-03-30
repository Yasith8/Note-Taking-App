import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function AddButton({ destination = "/addnote" }) {
  return (
    /* when this button clicked go to add note
       this button displayed only in mobile version
    */
    <Link to={destination}>
      <div className="rounded-full p-5 flex items-center justify-center bg-black text-white w-[5rem] h-[5rem] inset-x-0 left-auto m-10 bottom-10 fixed sm:hidden">
        <FaPlus />
      </div>
    </Link>
  );
}

export default AddButton;
