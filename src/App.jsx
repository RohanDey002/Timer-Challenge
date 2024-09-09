import Header from "./Components/Header.jsx"
import Player from "./Components/Player.jsx";
import TimerChallenge from "./Components/TimerChallenge.jsx";

function App() {
  return (
    <div id="content">
      <Header />
      <Player />
      <div id="challenges">
      <TimerChallenge title="Easy" targetTime={1}/>
      <TimerChallenge title="Medium" targetTime={5}/>
      <TimerChallenge title="Hard" targetTime={15}/>
      </div>
    </div>

  )
}
export default App;