import React from "react";
import donwloadmockup from "../assets/scene.png";

const Download = () => {
  return (
    <div className="download lg:mt-10 ">
      {/* content */}
      <div className="sec-wrapper flex-col items-center justify-center text-center pt-5">
        {/* left div */}
        <div className="flex flex-col gap-5 items-center justify-between mt-14">
          <h1 className="mainheading mb-5 ml-2 md:ml-0 text-gray-900">
            Download the Source Code
          </h1>
          <p className="paragraph max-w-3xl ml-2 md:ml-0 text-gray-700">
            Get full source-code on GitHub
          </p>
          <div className="bg-blue-500 px-3 p-2 centerdiv rounded hover:opacity-90 cursor-pointer mt-8">
            <a className="font-semibold text-gray-100 p-1 " href="https://github.com/Nainish-Rai/NFTify-App">
              Source Code
            </a>
          </div>
          {/* button */}

          <div className="lg:-my-14">
            <img className=" p-1" src={donwloadmockup} />
          </div>
          {/* buttonend */}
        </div>
        {/* left div end */}
      </div>

      {/* content end */}

      {/* Footer */}
      <div className="w-full centerdiv p-4 bg-gradient-to-r from-blue-600 to-indigo-500">
        {" "}
        <h3 className="font-semibold text-gray-100">
          Made with love by <a className="hover:text-pink-400" href="https://github.com/Nainish-Rai" target="_blank">Nainish Rai</a>
        </h3>
      </div>
    </div>
  );
};

export default Download;
