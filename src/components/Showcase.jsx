import React from 'react'
import showcasemockup from "../assets/mockup.png"

const Showcase = () => {
  return (
    <div className='w-full bg-blue-500'>
      
      {/* content */}
      <div className="sec-wrapper pt-5 mt-10">



        {/* left div */}
        <div className="flex flex-col gap-5 justify-between -mt-15">
          <h1 className="mainheading mb-5 ml-2 md:ml-0">
          Creative way to <br />Showcase the store
          </h1>
          <p className="paragraph ml-2 md:ml-0">
          The app contains two screens. The first screen<br />lists all NFTS's while the second one shows the<br />details of a specific NFT
          </p>
         
        </div>
        {/* left div end */}



        {/* Right div */}
        <div>
          <img className="w-full max-w-lg h-auto lg:mt-5 mt-20" src={showcasemockup} />
        </div>
        {/* right div end */}



      </div>


      {/* content end */}
    </div>
  )
}

export default Showcase