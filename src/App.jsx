import React from 'react'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='bg-[url("./assets/mesh.svg")] bg-cover'>

      <div className='h-[100vh] w-full  max-w-[1500px] m-auto'>
        <Navbar/>
      </div>

    </div>
  )
}

export default App
