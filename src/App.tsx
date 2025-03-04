import Button from "./components/ui/Buttons"
import Layer1 from "./components/layers/Layer1"
import Layer2 from "./components/layers/Layer2"

function App() {
  const handleClick = () =>
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth'
    })

  return (
    <div className="App">
      <div className="layers max-w-5xl mx-auto">
        <Button handleClick={handleClick}>Layer 2</Button>
        <Layer1 />
        <Layer2 />
      </div>
    </div>
  )
}

export default App