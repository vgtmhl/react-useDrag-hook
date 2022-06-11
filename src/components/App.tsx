import useDrag from '../hooks/useDrag'
import './App.css'
import Draggable from './draggable/Draggable'
import DraggableWithHook from './draggableWithHook/DraggableWithHook'

function App() {

  return (
    <div className="App">
      <Draggable />
      {useDrag(<DraggableWithHook />)}
    </div>
  )
}

export default App
