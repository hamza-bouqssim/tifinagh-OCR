import React from 'react'

export const Faq = () => {
  return (
    <div className=' w-full h-[720px] flex flex-col items-center pt-[40px]'>
        <h1 className='font-bold text-darkBlue text-[60px] mb-[50px]'>Frequently Asked Questions</h1>
        
        <div className='w-[80%] flex flex-col justify-center items-center gap-2 pb-[40px]'>

            <div className='w-[80%] flex flex-col justify-center items-center'>

                <div className='w-[75%] flex justify-between items-center'>
                    <h3 className='font-semibold text-darkBlue text-[35px]'>How much is the price for this item ?</h3>
                    <h3 className='font-bold text-darkBlue text-[35px]'>+</h3>
                </div>
                <p className='text-_gray font-bold max-w-[75%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque eos saepe laboriosam asperiores voluptates perspiciatis nemo omnis quisquam, laborum fugit consequuntur necessitatibus placeat distinctio quis aut ratione deserunt, debitis dolor.</p>
            </div>
            <div className='w-[80%] flex flex-col justify-center items-center'>

                <div className='w-[75%] flex justify-between items-center'>
                    <h3 className='font-semibold text-darkBlue text-[35px]'>How much is the price for this item ?</h3>
                    <h3 className='font-bold text-darkBlue text-[35px]'>+</h3>
                </div>
                {/* <p className='text-_gray font-bold max-w-[75%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque eos saepe laboriosam asperiores voluptates perspiciatis nemo omnis quisquam, laborum fugit consequuntur necessitatibus placeat distinctio quis aut ratione deserunt, debitis dolor.</p> */}
            </div>
            

            
        </div>
    </div>
  )
}
