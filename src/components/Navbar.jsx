import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ scrollToHome ,scrollToTifinagh, scrollToFaq }) => {
  const [navIcon, setNavIcon] = useState(true);
  const handleNavIcon = () =>{
    setNavIcon(!navIcon);
  }
  return (
    <div className='flex justify-between  items-center px-2 '>

      <img  className='h-[90px] w-[160px]' src="assets/tifinagh-OCR.svg" alt="" />

      <ul className=" hidden  lg:flex justify-center items-center gap-5 font-roboto font-bold text-darkBlue ">
        <li><button onClick={scrollToHome}  className=' duration-200 ease-in hover:text-[#2490F4]'>Home</button></li>
        <li><button onClick={scrollToTifinagh} className='duration-200 ease-in hover:text-[#2490F4]' href="#">Tifinagh-OCR</button></li>
        <li><button onClick={scrollToFaq} className='duration-200 ease-in hover:text-[#2490F4]' href="#">FAQ</button></li>
        <li><button className='duration-200 ease-in hover:text-[#2490F4]' href="#">Contact</button></li>
        <li className='flex justify-between gap-1 bg-_blue p-2 rounded-lg cursor-pointer text-white hover:text-white hover:bg-[#3c75d2]'>
          <h3>Tamazight</h3>
          <img src="public/assets/amazigh-flag.svg" alt="" />
        </li>
      </ul>
      <div className="cursor-pointer block lg:hidden" onClick={handleNavIcon}>{ navIcon ? <RxHamburgerMenu size={30} /> : <AiOutlineClose size={30} />}</div>
      
      <div className={`${navIcon ? "hidden": "w-[85%] py-5 left-0 right-0 m-auto backdrop-blur-2xl shadow-sm rounded-xl absolute mt-[300px]"}`}>
      <ul className="flex flex-col  justify-center items-center gap-5 font-roboto font-bold text-darkBlue ">
        <li><button onClick={scrollToHome}  className=' duration-200 ease-in hover:text-[#2490F4]'>Home</button></li>
        <li><button onClick={scrollToTifinagh} className='duration-200 ease-in hover:text-[#2490F4]' href="#">Tifinagh-OCR</button></li>
        <li><button onClick={scrollToFaq} className='duration-200 ease-in hover:text-[#2490F4]' href="#">FAQ</button></li>
        <li><button className='duration-200 ease-in hover:text-[#2490F4]' href="#">Contact</button></li>
        <li className='flex justify-between gap-1 bg-_blue p-2 rounded-lg cursor-pointer text-white hover:text-white hover:bg-[#3c75d2]'>
          <h3>Tamazight</h3>
          <img src="assets/amazigh-flag.svg" alt="" />
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
