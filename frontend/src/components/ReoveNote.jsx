import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";

//this component work as simple moadel
function ReoveNote() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [delNote,setDelNote]=useState([]);

  //get deleted note to check if there is any note left to delete
  useEffect((res)=>{
    setLoading(true);
    axios.get("https://note-taking-app-backend-six.vercel.app/note/inactive")
    .then(()=>{
      setLoading(false)
      setDelNote(res.data)
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err)
    })
  },[])

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
  
  //home button function
  const HomeHandler=()=>{
    navigate("/");
  }
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (delNote.length==0?(<div className="flex p-5 h-screen w-screen max-h-fit bg-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-10 min-w-[20rem] w-fit min-h-[12rem] h-fit flex flex-col items-center">
        <div className="flex items-center justify-center">
          <h1 className="text-[1.3rem] font-bold">
            There Are No Deleted Notes here
          </h1>
        </div>
        <div className="flex w-[100%] items-center justify-center gap-7 mt-5">
          <button
            className="w-[5rem] md:w-[10rem] h-[3rem] bg-transparent rounded-lg font-bold border-2 border-black text-black"
            onClick={backHandler}
          >
            Back
          </button>
          <button
            className="w-[5rem] md:w-[10rem] h-[3rem] bg-red-600 rounded-lg font-bold border-2 border-red-600 text-white"
            onClick={HomeHandler}
          >
            Home
          </button>
        </div>
      </div>
    </div>):(<div className="flex p-5 h-screen w-screen max-h-fit bg-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-10 min-w-[20rem] w-fit min-h-[12rem] h-fit flex flex-col items-center">
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
    </div>))
}
      </div>
    )
}
export default ReoveNote;





