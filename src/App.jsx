import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Taskbar from './components/taskbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Taskbar></Taskbar>
    </>
  )
}

export default App
