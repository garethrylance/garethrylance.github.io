import flappyIcon from "./assets/godot.png";
import "./App.css";

function App() {
  return (
    <>
      <h1>Energy Run</h1>
      <a href="flappy/index.html" target="_blank">
        {" "}
        <img src={flappyIcon} className="logo react" alt="React logo" />
      </a>
      <h1>Click the Robot</h1>
      <div>
        {/* <iframe
          src="flappy.html"
          width={500}
          height={500}
          title="Flappy Game" 
          allow="cross-origin-isolated"
        ></iframe> */}
      </div>
    </>
  );
}

export default App;
