import React, { useEffect, useState } from "react";
import "../App.css";

import { FaEye } from "react-icons/fa";
import { TbRestore } from "react-icons/tb";

import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

//this is same as card component but insted of card, this displayed only note that deleted
//use this because of button functionality chnage when note go to recyle bin
function DeletedCard({ data }) {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  //when component mount get the category of this card
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/category/${data.category}`)
      .then((res) => {
        setLoading(false);
        setCategory(res.data);
        console.log(category);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div
          key={data._id}
          className="w-[24.5rem] md:w-[18rem] lg:w-[22rem] h-[11rem] bg-slate-200 rounded-2xl p-3 flex flex-col justify-between mt-4"
        >
          <div className="flex justify-end">
            <div className="border-[1px] border-slate-400 text-slate-600 text-[10px] font-semibold px-2 rounded-full">
              {category.name}
            </div>
          </div>
          <div className="text-[1.1rem] font-bold">{data.title}</div>
          <div className="div-text">{data.content}</div>
          <div className="flex justify-between items-end">
            <div
              className={`p-2 w-[5rem] h-3 rounded-s-lg rounded-sm `}
              style={{ backgroundColor: data.color }}
            ></div>
            <div className="flex gap-3 justify-end">
              <Link to={`/viewnote/${data._id}`}>
                <div className="p-2 bg-green-300 rounded-full">
                  <FaEye />
                </div>
              </Link>
              <Link to={`/deletednote/${data._id}`}>
                <div className="p-2 bg-orange-300 rounded-full">
                  <TbRestore />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeletedCard;
