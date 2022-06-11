import { useState } from 'react'
import './App.css'
import Draggable from './draggable/Draggable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Draggable />
    </div>
  )
}

export default App
