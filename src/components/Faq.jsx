import React, { useState } from 'react'
import SingleQuestion from './SingleQuestion'
import { questions } from '../utils/questions'
export const Faq = () => {
    const [cards, setCards] = useState(questions)
  return (
    <div className=' w-full flex flex-col items-center pt-7 '>
        <h1 className='font-bold text-darkBlue text-[40px] text-center mb-[50px]'>Frequently Asked Questions</h1>
        
        <div className='lg:w-[80%] flex flex-col justify-center items-center gap-2 pb-[40px] '>
            {cards.map((card, index) => (
                <SingleQuestion {...card} key={index}/>
            ))}            
        </div>
    </div>
  )
}
