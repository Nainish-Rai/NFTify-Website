import React from "react";
import featurecard from "../assets/home_cards.png";

const Feature = () => {
  return (
    <div className="w-full bg-gradient-to-t from-gray-100 pb-20">
      {/* content */}
      <div className="sec-wrapper lg:flex-row-reverse lg:flex-wrap pt-5 mt-10 bg-gradient-to-t from-gray-100 lg:bg-none ">
        {/* right div */}
        <div className="flex flex-col gap-5 justify-between lg:mr-20 lg:text-right">
          <h1 className="mainheading mb-5 ml-2 md:ml-0 text-gray-900">
            Smart User Interface <br /> Marketplace
          </h1>
          <p className="paragraph ml-2 md:ml-0 text-gray-700">
            Experience a buttery smooth UI of NFTify <br /> Marketplace. Smooth
            constant colors of a fluent <br /> UI design
          </p>
        </div>
        {/* right div end */}

        {/* left div */}
        <div className="lg:-ml-10">
          <img
            className="w-full max-w-lg h-auto lg:mt-5 mt-20 "
            src={featurecard}
          />
        </div>
        {/* left div end */}
      </div>

      {/* content end */}
    </div>
  );
};

export default Feature;
