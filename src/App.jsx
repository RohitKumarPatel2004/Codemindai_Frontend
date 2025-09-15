import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-500">
        Tailwind is Working ✅
      </h1>
    </div>
     <div className="bg-primary  text-light p-4 mt-4 rounded">
        Hello Tailwind!
      </div>
    </>
  )
}

export default App
