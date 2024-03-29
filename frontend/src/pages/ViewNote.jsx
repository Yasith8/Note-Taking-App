import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewNote() {
  const { id } = useParams();

  const [notes, setNotes] = useState({});
  const [category, setCategory] = useState({});
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(false);

  //use to get spesific note
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://note-taking-app-backend-six.vercel.app/note/${id}`)
      .then((res) => {
        setNotes(res.data);
        setLoading(false);
        setCategoryId(res.data.category);
        console.log(categoryId);
      })
      .catch((err) => console.log(err));
  }, [id]);

  //used to get spesific category who owned this note
  useEffect(() => {
    axios
      .get(`https://note-taking-app-backend-six.vercel.app/category/${categoryId}`)
      .then((res) => {
        setCategory(res.data);
        console.log(category);
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div className="h-screen max-h-fit  flex md:p-5 md:h-screen bg-slate-100">
      <SideBar />
      <div className="w-screen m-2 md:w-5/6 bg-white rounded-2xl pl-2">
        <BackButton />

        <div className="m-6 border-2 p-5 mt-[5rem] border-black rounded-2xl min-h-[20rem] max-h-fit">
          <div className="flex items-center justify-end ">
            <div className="p-1 border-2 border-black min-w-[5rem] flex items-center justify-center font-bold rounded-lg">
              {category.name}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-[3rem] font-bold">{notes.title}</div>
          </div>

          <div className="flex items-center justify-center mt-5">
            <div>{notes.content}</div>
          </div>

          <div className="flex items-center justify-center ">
            <div
              className={`w-[20rem] h-7 rounded-full p-1 flex justify-center items-center font-semibold mt-5`}
              style={{ backgroundColor: notes.color }}
            >
              Theme Color
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewNote;
