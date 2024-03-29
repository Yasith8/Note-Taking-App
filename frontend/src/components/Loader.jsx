import React from "react";
import { Hourglass } from "react-loader-spinner";
import "../App.css";

//loader component  for when data is loading in the background
function Loader() {
  return (
    <div className="absolute top-0 left-0 bg-slate-100  w-screen h-screen  max-w-full bg-[#0000002d] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-Y-1/2">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#050505", "#000000"]}
        />
      </div>
    </div>
  );
}

export default Loader;
