import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Team from './components/pages/about/Team'
import Contact from './components/pages/settings/Contact'
import Form from './components/form/Form'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/team' exact element={<Team />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/form' exact element={<Form />} />
      </Routes>
    </>
  )
}

export default App
