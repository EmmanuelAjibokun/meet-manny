import './App.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import { Nav, Skills, Footer } from './components'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutMe/>} />
        <Route path='/contact' element={<Home/>} />
        <Route path='/works' element={<Home/>} />
      </Routes>

      <Skills/>
      <Footer/>
    </>
  )
}

export default App
