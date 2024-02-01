import React, { useRef, useState } from 'react'

const TifinaghOcr = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const onChangeHandler = (e) =>{
    console.log(e.target.files);
    const uploadedFile = e.target.files[0];
    uploadedFile ? setFile(URL.createObjectURL(e.target.files[0])) : setFile(null);
  }
  const gottenRef = () =>{
    inputRef.current.click();
  }
  const onDragOv = (event) =>{
    event.preventDefault();
  }
  const _onDrop = (event) =>{
    event.preventDefault();
    // console.log(event.dataTransfer.files);
    const uploadedFile = event.dataTransfer.files[0];
    uploadedFile ? setFile(URL.createObjectURL(event.dataTransfer.files[0])): setFile(null);
    

  }
  return (
    <div className="w-[100%] flex flex-col justify-center items-center py-5 mt-10 ">
      <h1 className='font-bold text-darkBlue text-[45px] md:text-[80px]'>Tifinagh-OCR</h1>

      <div className='flex flex-col lg:flex-row  md:justify-evenly md:gap-5'>

          <div className='w-[300px] h-[300px] md:w-[480px] md:h-[480px] bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center flex-shrink-0' onDragOver={onDragOv} onDrop={_onDrop}>

            {file ? (<img src={file} alt="Uploaded" className="object-cover w-[280px] h-[280px] rounded-2xl" />):(
              <>

              <div className='cursor-pointer' onClick={gottenRef} >
                <div className='bg-_blue text-white font-bold p-3 rounded-lg mt-2' >Upload Image</div>
                <input type="file"  className='hidden' ref={inputRef} defaultValue={null} onChange={onChangeHandler} />
              </div>
              <h2 className='text-_gray'>or drop a file</h2>

              </>
            )}

          </div>

          <div className='w-[300px] h-[300px] md:w-[480px] md:h-[480px] bg-white mt-3 md:mt-0 shadow-2xl rounded-2xl flex flex-col items-center justify-center'>
            <h2 className='text-_gray opacity-30'>Your result here</h2>
          </div>
      </div>

    </div>
  )
}

export default TifinaghOcr
