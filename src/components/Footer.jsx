import React from 'react'

const Footer = () => {
  return (
    <div className='w-full mx-auto h-16  border-t-2 border-double border-gray-400 flex flex-col justify-center items-center text-center text-sm sm:text-base px-4'>
      
      {/* Copyrtight Section */}
      <p className='font-semibold'>&copy; 2025 Ekhidaata Foundation. All rights reserved.</p>

      {/* Developed Section */}
      <p>
        Developed with <span role="img" aria-label="love">❤️</span> by{" "}
        <a 
          href="https://www.neerajhariyale.tech" 
          target='_blank' 
          rel='noopener noreferrer' 
          className='cursor-pointer hover:text-gray-900 '
        >
          Neeraj Hariyale
        </a>
      </p>
    </div>
  )
}

export default Footer
