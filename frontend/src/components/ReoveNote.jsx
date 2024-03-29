import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";

//this component work as simple moadel
function ReoveNote() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //this function used to hard delete of note(delete notes permenently)
  const submitHandler = () => {
    setLoading(true);
    axios
      .delete(`https://note-taking-app-backend-six.vercel.app/remove`)
      .then(() => {
        setLoading(false);
        alert("Recycle Bin is Empty now");
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("This process has following errors\n" + err);
      });
  };

  //back button
  const backHandler = () => {
    navigate("/deletednote");
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex p-5 h-screen w-screen max-h-fit bg-slate-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-10 min-w-[25rem] w-fit h-[10rem] flex flex-col items-center">
            <div className="flex items-center justify-center">
              <h1 className="text-[1.3rem] font-bold">
                Are you sure to Delete this note Permenently?
              </h1>
            </div>
            <div className="flex w-[100%] items-center justify-center gap-7 mt-5">
              <button
                className="w-[5rem] md:w-[10rem] h-[3rem] bg-transparent rounded-lg font-bold border-2 border-black text-black"
                onClick={backHandler}
              >
                Cancel
              </button>
              <button
                className="w-[5rem] md:w-[10rem] h-[3rem] bg-red-600 rounded-lg font-bold border-2 border-red-600 text-white"
                onClick={submitHandler}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReoveNote;
