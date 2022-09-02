import './App.css';
import Counter from './Components/Counter';



function App() {
  return (
    <div className="popupdiv">
      <h2>Welcome 👋</h2>
      <h1>Team Ultra-Laser</h1>
      <p><span style={{fontSize:"35px",color:"red"}}>Impossible</span> is Nothing</p>
      <br></br>
      <Counter/>
    </div>
  );
}

export default App;
