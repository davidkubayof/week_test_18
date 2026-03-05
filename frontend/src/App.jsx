import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home.JSX'
import Seats from './Pages/Seats'
import Details from './Pages/Details'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/seats/:id" element={<Seats />} />
      </Routes>

    </>
  )
}

export default App
