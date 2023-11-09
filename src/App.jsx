import { useState } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Research from './components/Research.jsx'
import Teaching from './components/Teaching.jsx'
import Services from './components/Services.jsx'
import './App.css'

function App() {

  return (
    <div className='container'>
      <Header />
      <section className='about-section'>
        <About />
      </section>
      <section className='research-section'>
        <Research />
      </section>
      <section className='teaching-section'>
        <Teaching />
      </section>
      <section className='services-section'>
        <Services />
      </section>
    </div>
  )
}

export default App