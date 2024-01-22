import React, { useState } from 'react'

const SingleQuestion = ({question, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
    <>
        <div className='w-[80%] flex flex-col justify-center items-center'>
            {
                showAnswer ? (

                <div className='w-[100%] flex justify-between items-center cursor-pointer'  onClick={() => setShowAnswer(false)}>
                    <h3 className='font-semibold text-darkBlue text-[30px]'>{question}</h3>
                    <h3 className='font-semibold text-darkBlue text-[30px]'>-</h3>
                </div>
                ): (
                <div className='w-[100%] flex justify-between items-center cursor-pointer'  onClick={() => setShowAnswer(true)}>
                    <h3 className='font-semibold text-darkBlue text-[30px]'>{question}</h3>
                    <h3 className='font-semibold text-darkBlue text-[30px]'>+</h3>
                </div>
                )
            }

            {
                showAnswer ? (

                    <p className='text-_gray font-bold'>{answer}</p>
                ): null
            }
        </div>
    </>
  )
}

export default SingleQuestion
