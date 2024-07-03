import './App.css'
import {Hero, Nav, Projects} from "./components/index.js"

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <Projects/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
