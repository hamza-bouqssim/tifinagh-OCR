import React from 'react'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='bg-[url("./assets/mesh.svg")] bg-cover'>

      <div className='h-[100%] w-full  max-w-[1500px] px-10 m-auto'>
        <Navbar/>

      <div className=" flex justify-between items-center w-full h-[600px] max-h-[600px] mt-[50px]">

        <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='text-[50px] font-bold'>Convert Your <br /> <span className='text-_blue'>Tifinagh</span>  Image to Text</h1>
        <p className='text-[22px] text-_gray font-bold mt-2'>Instantly convert Tifinagh images to text with ease.<br/> Effortless transformation for clear,<br />readable results.</p>
        <a className='bg-_blue text-white font-bold p-3 rounded-lg mt-2' href="#">Get Started</a>
        </div>

        <img className='h-[500px] w-[500px]' src="src/assets/illustration-hero.svg" alt="" />

      </div>

      <div className=" w-full h-[500px] max-h-[600px] mt-5 flex justify-center gap-10 items-center">

        <div className='w-[420px] h-[380px] bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center'>
        <button className='bg-_blue text-white font-bold p-3 rounded-lg mt-2' href="#">Upload Image</button>
        <h2 className='text-_gray'>or drop a file</h2>
        </div>

        <div className='w-[420px] h-[380px] bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center'>
        <h2 className='text-_gray opacity-30'>Your result here</h2>
        </div>

      </div>
      </div>

    </div>
  )
}

export default App
