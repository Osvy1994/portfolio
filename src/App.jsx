import './App.css'
import { NavbarComp } from './components/NavbarComp'
import { HeroSection } from './components/HeroSection'
import { AboutMe } from './components/AboutMe'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'

function App() {

  return (
    <div className='App'>
      <NavbarComp />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
