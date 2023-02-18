import React from "react";
import bgbanner from "../assets/banner03.svg";
import "./Technologies.css";
import reactnativeicon from "../assets/react.png";
import jsicon from "../assets/javascript.png";

const Technologies = () => {
  return (
    <div className="techno ">
      {/* content */}
      <div className="sec-wrapper flex-col items-center justify-center text-center pt-5">
        {/* left div */}
        <div className="flex flex-col gap-5 items-center justify-between mt-14">
          <h1 className="mainheading mb-5 ml-2 md:ml-0">Technologies </h1>
          <p className="paragraph max-w-3xl ml-2 md:ml-0">
            NFT-ify has been developed using cross-platform technology React
            Native and Tailwind css
          </p>
          {/* button */}
          <div className="icons flex mt-5">
          <div className="bg-gray-50 m-2 rounded pb-5 px-4 p-1">
              <img className=" p-1 w-32 h-32" src={reactnativeicon} />
              <h3 className="font-semibold">React Native</h3>
            </div>
            <div className="bg-gray-50 m-2 rounded pb-5 px-4 p-1">
              <img className=" p-1 w-32 h-32" src={jsicon} />
              <h3 className="font-semibold">Javascript</h3>
            </div>
        
          </div>
          {/* buttonend */}
        </div>
        {/* left div end */}
      </div>

      {/* content end */}
    </div>
  );
};

export default Technologies;
