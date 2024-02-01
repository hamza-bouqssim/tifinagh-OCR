import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ scrollToHome ,scrollToTifinagh, scrollToFaq }) => {
  const [navIcon, setNavIcon] = useState(false);
  const handleNavIcon = () =>{
    setNavIcon(!navIcon);
  }
  return (
    <div className='flex justify-between  items-center'>

      <img  className='h-[90px] w-[160px]' src="/src/assets/tifinagh-OCR.svg" alt="" />

      <ul className=" hidden  md:flex justify-center items-center gap-5 font-roboto font-bold text-darkBlue ">
        <li><button onClick={scrollToHome}  className=' duration-200 ease-in hover:text-[#2490F4]'>Home</button></li>
        <li><button onClick={scrollToTifinagh} className='duration-200 ease-in hover:text-[#2490F4]' href="#">Tifinagh-OCR</button></li>
        <li><button onClick={scrollToFaq} className='duration-200 ease-in hover:text-[#2490F4]' href="#">FAQ</button></li>
        <li><button className='duration-200 ease-in hover:text-[#2490F4]' href="#">Contact</button></li>
        <li className='flex justify-between gap-1 bg-_blue p-2 rounded-lg cursor-pointer text-white hover:text-white hover:bg-[#3c75d2]'>
          <h3>Tamazight</h3>
          <img src="/src/assets/amazigh-flag.svg" alt="" />
        </li>
      </ul>
      <div  className="cursor-pointer block md:hidden" onClick={handleNavIcon}>{ navIcon ? <RxHamburgerMenu size={30} /> : <AiOutlineClose size={30} />}</div>

    </div>
  )
}

export default Navbar
