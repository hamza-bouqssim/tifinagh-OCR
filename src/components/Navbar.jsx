import React from 'react'

const Navbar = () => {


  return (
    <div className='flex justify-between'>
      <img  className='h-[90px] w-[160px]' src="/src/assets/tifinagh-OCR.svg" alt="" />
      <ul className=" flex justify-center items-center gap-5 font-roboto font-bold text-darkBlue ">
        <li><a className='hover:text-[#2490F4]' href="#">Home</a></li>
        <li><a className='hover:text-[#2490F4]' href="#">Tifinagh-OCR</a></li>
        <li><a className='hover:text-[#2490F4]' href="#">FAQ</a></li>
        <li><a className='hover:text-[#2490F4]' href="#">Contact</a></li>
        <li className='flex justify-between gap-1 bg-_blue p-2 rounded-lg text-white hover:text-white hover:bg-[#3c75d2]'>
          <h3>Tamazight</h3>
          <img src="/src/assets/amazigh-flag.svg" alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
