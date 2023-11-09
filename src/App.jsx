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
      <section id='about-section'>
        <About />
      </section>
      <section id='research-section'>
        <Research />
      </section>
      <section id='teaching-section'>
        <Teaching />
      </section>
      <section id='services-section'>
        <Services />
      </section>
    </div>
  )
}

export default App