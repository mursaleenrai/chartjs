import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Settings from './components/pages/settings/Settings'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/settings' exact element={<Settings />} />
      </Routes>
    </>
  )
}

export default App
