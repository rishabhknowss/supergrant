import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/Landing'
import { Navbar } from './components/Navbar'

function App() { 
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
