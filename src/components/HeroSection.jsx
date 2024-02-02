import React from 'react'
import HeroImage from "./src/assets/illustration-hero.svg"

const HeroSection = ({ scrollToTifinagh }) => {
  return (
    <div className="flex flex-col  items-center w-full py-6 lg:flex-row  md:justify-center  gap-16">
      
      <div className='flex flex-col justify-center items-center text-center '>
        <h1 className='text-[45px] md:text-[60px] font-bold text-darkBlue'>Convert Your <br /> <span className='text-_blue'>Tifinagh</span>  Image to Text</h1>
        <p className='text-[15px] text-_gray font-bold mt-2'>Instantly convert Tifinagh images to text with ease.<br/> Effortless transformation for clear,<br />readable results.</p>
        <button onClick={scrollToTifinagh} className='bg-_blue text-white font-bold p-3 rounded-lg mt-2 cursor-pointer' href="#">Get Started</button>
      </div>
        <img className='h-[200px] w-[200px] mt-4 md:h-[500px] md:w-[500px]' src={HeroImage} alt="" />

    </div>
  )
}

export default HeroSection
