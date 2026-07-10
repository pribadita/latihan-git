import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import "./style.css"
import Welcome from '../components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <Welcome name="John" color="blue" job="Desainer" />
      <Welcome name="Sarah" job="Model" />
      <Welcome name="John" job="Engineer" />
    </div>
    </>
  )
}

export default App
