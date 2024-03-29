import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { IoIosSearch } from "react-icons/io";
import Card from "../components/Card";
import AddButton from "../components/AddButton";
import Loader from "../components/Loader";
import axios from "axios";

function Home() {
  //usestate for stored fetched data from db
  const [notes, setNotes] = useState([]);
  //use state for loader
  const [loading, setLoading] = useState(false);
  //get parameters to search note data
  const [searchTerm, setSearchTerm] = useState("");

  //function to get all active data
  const fetchDefaultNotes = () => {
    setLoading(true);
    axios
      .get("https://note-taking-app-backend-six.vercel.app/note/active")
      .then((res) => {
        setNotes(res.data.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  //useEffect hook for load active data when system refreash
  useEffect(() => {
    fetchDefaultNotes();
  }, []);

  //search function for get dynamic data according to title and content
  const handleSearch = () => {
    axios
      .get(`https://note-taking-app-backend-six.vercel.app/search?term=${searchTerm}`)
      .then((res) => {
        //if there was a no result, then load the default data again
        if (notes.length == 0) {
          fetchDefaultNotes;
        }
        //if not set that data to note
        setNotes(res.data);
      })
      .catch((err) => {
        console.log("Error occurred during search:", err);
      });
  };

  return (
    <div className="flex p-5 h-full max-h-fit bg-slate-100">
      <SideBar />
      <div className="w-full md:w-5/6 bg-white rounded-2xl pl-2 pb-5">
        <div className="flex items-center justify-between">
          <div className="w-1/2 m-5 rounded-full p-2 bg-slate-100 flex items-center justify-between">
            <input
              type="text"
              id="search"
              className="w-2/3 p-1 bg-slate-100 focus:outline-none"
              placeholder="Search anything"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch();
              }}
            />
            <div className="p-3 bg-white rounded-full">
              <IoIosSearch />
            </div>
            {/* this is dropdown menu . only displayed in mobile size */}
        
          </div>
          <select
            name=""
            id=""
            className="mr-5 sm:hidden p-3 border-2 w-[8rem] text-slate-400 border-slate-400 rounded-full"
          >
            <option value="">Home</option>
            <option value="">Form</option>
          </select>
        </div>

        {/* if there was some issues load the loader
                 this trigger when
                      * error occur
                      *not fetch data to note
         */}
        {loading ? (
          <Loader />
        ) : (
          /* if not display this div */
          <div class="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 pl-4">
            {/* dynamically displayed note data */}
            {notes.map((item) => (
              <Card key={item._id} data={item} />
            ))}
          </div>
        )}
        <AddButton />
      </div>
    </div>
  );
}

export default Home;
