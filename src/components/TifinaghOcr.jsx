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
    <div className="w-full h-[720px] flex flex-col justify-center items-center gap-5">
      <h1 className='font-bold text-darkBlue text-[80px]'>Tifinagh-OCR</h1>

      <div className=' flex justify-center gap-10 items-center'>

          <div className='w-[480px] h-[420px] bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center flex-shrink-0' onDragOver={onDragOv} onDrop={_onDrop}>
            {file ? (<img src={file} alt="Uploaded" className="object-cover w-[440px] h-[380px] rounded-2xl" />):(
              <>

              <div className='cursor-pointer' onClick={gottenRef} >
                <div className='bg-_blue text-white font-bold p-3 rounded-lg mt-2' >Upload Image</div>
                <input type="file"  className='hidden' ref={inputRef} defaultValue={null} onChange={onChangeHandler} />
              </div>
              <h2 className='text-_gray'>or drop a file</h2>
              </>
            )}

          </div>

          <div className='w-[480px] h-[420px] bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center'>
            <h2 className='text-_gray opacity-30'>Your result here</h2>
          </div>
      </div>

    </div>
  )
}

export default TifinaghOcr
