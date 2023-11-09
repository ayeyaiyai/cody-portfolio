import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Research from './components/Research.jsx';
import Teaching from './components/Teaching.jsx';
import Services from './components/Services.jsx';
import FadeInSection from './components/FadeInSection.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <FadeInSection id='about'>
        <About />
      </FadeInSection>
      <FadeInSection id='research'>
        <Research />
      </FadeInSection>
      <FadeInSection id='teaching'>
        <Teaching />
      </FadeInSection>
      <FadeInSection id='services'>
        <Services />
      </FadeInSection>
      <FadeInSection id='contact'>
        <Contact />
      </FadeInSection>
    </div>
  );
}

export default App;