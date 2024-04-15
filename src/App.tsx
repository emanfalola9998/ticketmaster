import { useState } from 'react'
import team from "./data/team"
import './App.css'
import Employees from './components/Employee/Employees'



function App() {
  

  return (
    <>
      <Employees employees={team}/>
    </>
  )
}

export default App