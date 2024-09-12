import './App.css'
import LeftBar from './components/left_bar/left_bar';
import Map from './components/map/map';

function App() {

  return (
    <>
      <div className="modular-page-container">
        <LeftBar/>
        <Map/>
      </div>
    </>
  )
}

export default App
