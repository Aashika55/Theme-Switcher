
import { useState } from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddToDo />
      <Todos />
    </>
  )
}

export default App
