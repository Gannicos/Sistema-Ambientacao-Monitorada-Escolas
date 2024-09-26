import './App.css'
import LeftBar from './components/left_bar/left_bar';
import RightBar from './components/right_bar/right_bar';
import Map from './components/map/map';
import { useState } from 'react';

function App() {

  const mapImages = [
    'https://github.com/Gannicos/Campus-Niteroi-3D/blob/main/img/Render_1.png?raw=true',
    'https://github.com/Gannicos/Campus-Niteroi-3D/blob/main/img/Render_2.png?raw=true'
  ];

  const [currentMapIndex, setCurrentMapIndex] = useState(0);

  const toggleMapImage = () => {
    setCurrentMapIndex((currentMapIndex + 1) % mapImages.length);
  };

  return (
    <>
      <div className="modular-page-container">
        <Map mapImage={mapImages[currentMapIndex]} />
        <div className='modular-page-end'>
        <RightBar onToggleMapImage={toggleMapImage}/>
        </div>
        <LeftBar />
      </div>
    </>
  )
}

export default App
