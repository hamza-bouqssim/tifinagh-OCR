import React from 'react'

const TifinaghOcr = () => {
  return (
    <div className="w-full h-[720px] flex flex-col justify-center items-center gap-5">
      <h1 className='font-bold text-darkBlue text-[80px]'>Tifinagh-OCR</h1>

      <div className=' flex justify-center gap-10 items-center'>

          <div className='w-[480px] h-[420px] bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center'>
          <button className='bg-_blue text-white font-bold p-3 rounded-lg mt-2' href="#">Upload Image</button>
          <h2 className='text-_gray'>or drop a file</h2>
          </div>

          <div className='w-[480px] h-[420px] bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center'>
          <h2 className='text-_gray opacity-30'>Your result here</h2>
        </div>
        </div>

      </div>
  )
}

export default TifinaghOcr
