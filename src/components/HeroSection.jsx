import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center w-full h-[720px]">
      <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='text-[50px] font-bold text-darkBlue'>Convert Your <br /> <span className='text-_blue'>Tifinagh</span>  Image to Text</h1>
        <p className='text-[22px] text-_gray font-bold mt-2'>Instantly convert Tifinagh images to text with ease.<br/> Effortless transformation for clear,<br />readable results.</p>
        <a className='bg-_blue text-white font-bold p-3 rounded-lg mt-2' href="#">Get Started</a>
        </div>

        <img className='h-[500px] w-[500px]' src="src/assets/illustration-hero.svg" alt="" />
    </div>
  )
}

export default HeroSection
