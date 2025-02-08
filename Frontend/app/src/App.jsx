import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Uploads from './Components/Uploads'
import Reports from './Components/Reports'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='navbar'>
    <Link to={'/'}>Uploads</Link>
    <Link to={'/reports'}>Reports</Link>
    </div>
    <Routes>
     <Route path='/' element={<Uploads/>}></Route>
  <Route  path='/reports'element={<Reports/>}></Route>
    </Routes>

      </>
        
  )
}

export default App
