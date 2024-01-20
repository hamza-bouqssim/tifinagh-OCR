import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TifinaghOcr from './components/TifinaghOcr'
const App = () => {
  return (
    <div className='bg-[url("./assets/mesh.svg")] bg-cover'>

      <div className='h-[100%] w-full  max-w-[1500px] px-10 m-auto'>

        <Navbar/>

        <HeroSection/>

        <TifinaghOcr/>
        
      </div>

    </div>
  )
}

export default App
