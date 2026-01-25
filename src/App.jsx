import React, { useEffect } from 'react'
import Hero from './components/Hero'
import "./index.css";
import About from './components/About.jsx'

const App = () => {

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero/>
      <About/>
    </main>
  )
}

export default App
