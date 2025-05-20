import React from 'react'
import Header from '../components/Header'
import Coursel from '../components/Coursel'
import About from '../components/About'
import Teams from '../components/Teams'
import Drive from '../components/Drive'
import ContactUs from '../components/ContactUs'
import JoinUs from '../components/JoinUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='mx-auto'>
        {/* <Header/> */}
        <Coursel/>
        <About/>
        <Drive/>
        <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly">
        <div className="flex flex-col items-center">
          <p className="text-center mt-8  text-3xl">Meet Our Team</p>
          <div className="w-16 border-2 border-red-500 mt-1"></div>
        </div>
      </div>
        <Teams/>
        <ContactUs/>
        <JoinUs/>   
        <Footer/>
    </div>
  )
}

export default Home
