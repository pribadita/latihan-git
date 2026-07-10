import Welcome from './components/Welcome'
import Counter from './components/Counter'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let peserta = [
    {nama:"Rendra", kota:"Samarinda", umur:5},
    {nama:"Andra", kota:"Balikpapan", umur:6},
    {nama:"Desta", kota:"Samarinda", umur:10},
    {nama:"Dafa", kota:"Samarinda", umur:11},
    {nama:"Irti", kota:"Makassar", umur:25},
    {nama:"Yul", kota:"Malinau", umur:17}
  ]
  return (
    <>
      <div className='container'>
        {peserta.map((item,index) => {
          return (
          <Welcome key={index} name={item.nama} job={item.kota} age={item.umur}></Welcome>
          )
          })
        }
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
      </button>
      <Counter></Counter>
    </>
  )
}

export default App