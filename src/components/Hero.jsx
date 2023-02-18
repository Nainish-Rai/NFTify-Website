import React from "react";
import ExpoIcon from "../assets/expo.png";
import homemockup from "../assets/home_hero.png";
import herosvg from "../assets/banner.svg";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero lg:h-screen">
      {/* content */}
      <div className="sec-wrapper pt-5">
        {/* left div */}
        <div className="flex flex-col gap-5 justify-between">
          <h1 className="mainheading mb-5 ml-2 md:ml-0">
            You own store of Nifty <br /> NFTs. Start Selling & <br /> Growing
          </h1>
          <p className="paragraph ml-2 md:ml-0">
            Buy,store,collect NFTs,exchange & earn crypto. <br /> Join 25+
            million people using NFTify <br /> Marketplace
          </p>
          {/* button */}
          <div className="flex-col md:flex self-center gap-5 lg:justify-start justify-between">
            <div className="btn-primary bg-black w-40 flex items-center justify-between mt-10  self-center lg:self-auto">
              <a className="flex items-center justify-between w-40" href="https://expo.dev/@nainishrai/NFTify?serviceType=classic&distribution=expo-go">{" "}
              <img src={ExpoIcon} className="w-8 h-8" />
              <div>
                <h2 className="font-medium text-gray-300">View it on</h2>
                <h3>Expo Store</h3>
              </div>
              </a>
            </div>
            <a href="https://github.com/Nainish-Rai/NFTify-App/releases/download/v1.0.0/NFTify-release-1.apk">
            <div className="btn-primary bg-black w-40 flex items-center justify-between mt-10 lg:self-auto">
              <div className="ml-1">
                <h2 className="font-medium text-gray-300">Direct Download</h2>
                <h3 className="text-center">For Android</h3>
              </div>
            </div>
            </a>
          </div>
          {/* buttonend */}
        </div>
        {/* left div end */}

        {/* Right div */}
        <div>
          <img
            className="w-full max-w-lg h-auto lg:mt-5 mt-20"
            src={homemockup}
          />
        </div>
        {/* right div end */}
      </div>

      {/* content end */}
    </div>
  );
};

export default Hero;
