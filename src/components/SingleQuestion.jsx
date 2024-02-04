import React, { useState } from 'react'
// import 'src/App.css'
const SingleQuestion = ({question, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
    <>
        <div className='w-[80%] flex flex-col justify-center items-center '>
            {
                showAnswer ? (

                <div className='w-[80%] flex justify-between items-center cursor-pointer'  onClick={() => setShowAnswer(false)}>
                    <h3 className='font-semibold text-darkBlue text-[18px] lg:text-[25px]'>{question}</h3>
                    <h3 className='font-semibold text-darkBlue text-[18px] lg:text-[25px]'>-</h3>
                </div>
                ): (
                <div className='w-[80%] flex justify-between items-center cursor-pointer'  onClick={() => setShowAnswer(true)}>
                    <h3 className='font-semibold text-darkBlue text-[18px] lg:text-[25px]'>{question}</h3>
                    <h3 className='font-semibold text-darkBlue text-[18px] lg:text-[25px]'>+</h3>
                </div>
                )
            }

            {
                showAnswer ? (

                    <p className='text-_gray font-bold  lg:w-[80%]'>{answer}</p>
                ): null
            }
        </div>
    </>
  )
}

export default SingleQuestion
