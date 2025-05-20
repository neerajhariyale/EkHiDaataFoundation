import React from 'react'
import qrImage from '../assets/workPhotoVideos/QRUPI.jpg' // make sure this exists in your assets folder
import qrImage1 from '../assets/workPhotoVideos/QRUPI2.png' // make sure this exists in your assets folder
import Footer from '../components/Footer'

const Donate = () => {
  return (
    <div className="w-full min-h-screen  flex flex-col justify-center items-center ">
      
      {/* Quote Section */}
      <h1 className="text-2xl sm:text-4xl font-semibold text-center   mb-4">
        "Your small help can <span className='text-red-500'>make a big difference."</span> 
      </h1>
      <p className="text-center text-gray-700 max-w-xl mb-8">
        Every rupee you donate brings us one step closer to changing someone's life.  
        Help us spread kindness, hope, and opportunity.
      </p>

      {/* QR Code Section */}
      <div className=" shadow-stone-400 shadow-2xl p-6 rounded-xl">
        <h2 className="text-lg font-semibold mb-2 text-center">Scan & Donate via UPI</h2>
        <img 
          src={qrImage1} 
          alt="Donate QR Code" 
          className="w-96 mx-auto h-96  object-contain rounded-md " 
        />
        <p className="text-sm text-center mt-1 text-gray-600">
          UPI ID: <span className="font-medium">8349312502@pthdfc</span>
        </p>
      </div>

      {/* Thank You */}
      <p className="mt-6 text-md text-gray-600 text-center mb-6">
        Thank you for your generosity and support! 💖
      </p>

      
        <Footer />
      
    </div>
  )
}

export default Donate
