import { useState } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import './App.css'

function App() {

  return (
    <div className='container'>
      <Header />
      <section className='about-section'>
        <About />
      </section>
    </div>
  )
}

export default App