import './App.css'
import Hero from './components/Hero'
import Feature from "./components/Feature"
import Technologies from "./components/Technologies"
import Deployment from './components/Deployment'
import Showcase from './components/Showcase'
import Download from './components/Download'
function App() {

  return (
    <div className="App flex flex-col">
      <Hero/>
      <Feature/>
      <Technologies/>
      <Deployment/>
      <Showcase/>
      <Download/>
    </div>
  )
}

export default App
