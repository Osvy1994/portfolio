import './App.css'
import { NavbarComp } from './components/NavbarComp'
import { HeroSection } from './components/HeroSection'
import { About } from './components/About'

function App() {

  return (
    <div className='App'>
      <NavbarComp />
      <HeroSection />
      <About />
    </div>
  )
}

export default App
