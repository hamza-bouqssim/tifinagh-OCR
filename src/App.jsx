import React from 'react'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='bg-[url("./assets/mesh.svg")] bg-cover'>

      <div className='h-[100vh] w-full  max-w-[1500px] px-10 m-auto'>
        <Navbar/>
      <div className="bg-red-500 w-full h-[87%] max-h-[600px] ">

        <div className='flex flex-col justify-center items-center text-center bg-yellow-500'>
        <h1 className='text-[50px] font-bold'>Convert Your <br /> <span className='text-_blue'>Tifinagh</span>  Image to Text</h1>
        <p className='text-[22px] text-_gray font-bold mt-2'>Instantly convert Tifinagh images to text with ease.<br/> Effortless transformation for clear,<br />readable results.</p>
        <a className='bg-_blue text-white font-bold p-3 rounded-lg mt-2' href="#">Get Started</a>

        <img src="./assets/illustration-hero.svg" alt="" />
        </div>

      </div>
      <div className="bg-green-500 w-full h-[87%] max-h-[600px] mt-5"></div>
      </div>

    </div>
  )
}

export default App
