import useDrag from '../hooks/useDrag'
import './App.css'
import Example from './example/Example'


function App() {

  return (
    <div className="App">
      {useDrag(<Example />)}
    </div>
  )
}

export default App
