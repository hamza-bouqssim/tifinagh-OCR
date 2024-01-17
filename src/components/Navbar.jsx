import React from 'react'

const Navbar = () => {


  return (
    <div className='flex justify-between'>
      <img  className='h-[90px] w-[160px]' src="/src/assets/tifinagh-OCR.svg" alt="" />
      <ul className='flex justify-center items-center gap-5'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tifinagh-OCR</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact</a></li>
        <li className='flex justify-between gap-1 bg-[#2490F4] p-2 rounded-lg text-white'>
          <h3>Tamazight</h3>
          <img src="/src/assets/amazigh-flag.svg" alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
