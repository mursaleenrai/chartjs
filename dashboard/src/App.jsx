import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Team from './components/pages/about/Team'
import Contact from './components/pages/settings/Contact'
import Form from './components/form/Form'
import BarCharts from './components/charts/mainCharts/BarCharts'
import LineCharts from './components/charts/mainCharts/LineCharts'
import PieCharts from './components/charts/mainCharts/PieCharts'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/team' exact element={<Team />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/form' exact element={<Form />} />
        <Route path='/pie' exact element={<PieCharts />} />
        <Route path='/line' exact element={<LineCharts />} />
        <Route path='/bar' exact element={<BarCharts />} />
      </Routes>
    </>
  )
}

export default App
