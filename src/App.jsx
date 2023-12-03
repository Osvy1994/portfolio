import './App.css'
import { NavbarComp } from './components/NavbarComp'
import { HeroSection } from './components/HeroSection'
import { AboutMe } from './components/AboutMe'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='App'>
      <NavbarComp />
      <HeroSection />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App
