import { appStyles, radalStyles } from "./App.styles";
import radarPhoto from "../assets/speedCamera.jpeg";

function App() {
  return (
    <div className={appStyles}>
      <img className={radalStyles} src={radarPhoto} alt="" />
      <h1>Netguru Radar</h1>
      <h2>Or something don't know I'm not form BD</h2>
    </div>
  );
}

export default App;
