import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function BackButton({ destination = "/" }) {
  return (
    /* this button reuseble component for go to main page */
    <Link to={destination}>
      <div className="w-10 h-10 flex items-center justify-center m-5 bg-slate-200 rounded-full">
        <IoChevronBack />
      </div>
    </Link>
  );
}

export default BackButton;
