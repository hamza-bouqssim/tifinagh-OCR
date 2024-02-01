import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TifinaghOcr from './components/TifinaghOcr'
import { Faq } from './components/Faq'
const App = () => {
  const ref = useRef(null);
  const refToTifinagh = useRef(null);
  const refToFaq = useRef(null);

  const scrollToTifinagh = () =>{
    refToTifinagh.current?.scrollIntoView();
  }
  const scrollToFaq = () =>{
    refToFaq.current?.scrollIntoView();
  }
  const scrollToHome = () =>{
    ref.current?.scrollIntoView();
  }
  return (
    <div className='bg-[url("./assets/mesh.svg")] w-full md:bg-cover'>

      <div className='h-[100%] w-[100%]  max-w-[1500px] px-2 m-auto'>

      <Navbar scrollToHome={scrollToHome} scrollToTifinagh={scrollToTifinagh} scrollToFaq={scrollToFaq}/>
       
      <div ref={ref}> <HeroSection scrollToTifinagh={scrollToTifinagh}/></div>

      <div ref={refToTifinagh}><TifinaghOcr/></div>

      <div ref={refToFaq}><Faq/></div>
        
      </div>

    </div>
  )
}

export default App
