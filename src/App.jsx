import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<Home/>} />
        <Route path='/contact' element={<Home/>} />
        <Route path='/works' element={<Home/>} />
      </Routes>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
