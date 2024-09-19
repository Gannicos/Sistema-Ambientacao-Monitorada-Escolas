import './App.css'
import LeftBar from './components/left_bar/left_bar';
import Map from './components/map/map';
import SearchBar from './components/search_bar/search_bar';

function App() {

  return (
    <>
      <div className="modular-page-container">
        <LeftBar/>
        <Map/>
        <SearchBar/>
      </div>
    </>
  )
}

export default App
