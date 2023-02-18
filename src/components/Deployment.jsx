import React from 'react'
import deploymentpng from "../assets/feature.png"

const Deployment = () => {
  return (
    <div className="w-full bg-gradient-to-t from-gray-100 pb-20 mt-10">
      {/* content */}
      <div className="sec-wrapper lg:flex-row-reverse lg:flex-wrap pt-5 mt-10 bg-gradient-to-t from-gray-100 lg:bg-none ">
        {/* right div */}
        <div className="flex flex-col gap-5 justify-between lg:mr-20 lg:text-right">
          <h1 className="mainheading mb-5 ml-2 md:ml-0 text-gray-900">
            Deployment
          </h1>
          <p className="paragraph ml-2 md:ml-0 text-gray-700">
            NFTify is built using Expo which runs natively on<br />All user's devices. You can easily get your app into <br /> people's hands
          </p>
        </div>
        {/* right div end */}

        {/* left div */}
        <div className="lg:-ml-10">
          <img
            className="w-full max-w-lg h-auto lg:mt-5 mt-20 "
            src={deploymentpng}
          />
        </div>
        {/* left div end */}
      </div>

      {/* content end */}
    </div>
  )
}

export default Deployment