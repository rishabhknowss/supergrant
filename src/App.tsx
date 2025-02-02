import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/Landing'
import { Search } from './pages/Search'

function App() { 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/search' element={<Search/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
