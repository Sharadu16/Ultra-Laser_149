import './App.css';
import Weather from './Pages/Weather';
import Timer from './Components/Timer';

function App() {
  return (
    <div className='wholeext' id="tagline">
      <p id="ultra"> Welcome 👋 Team Ultra-Laser</p>
      
        <Weather/>
        <Timer/>
    
    </div>
  );
}

export default App;
