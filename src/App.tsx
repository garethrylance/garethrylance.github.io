import flappyIcon from "./assets/logo.png";
import garethBot from "./assets/gareth_bot.png";
import "./App.css";

function App() {
  return (
    <>
      <img src={garethBot} height={"200px"} alt="Gareth logo" />
      <div>
        <h2>Energy Run</h2>
        <a href="flappy/index.html" target="_blank">
          <img src={flappyIcon} className="logo react" alt="Flappy logo" />
        </a>
        <h2>Click the Logo</h2>
      </div>
    </>
  );
}

export default App;
