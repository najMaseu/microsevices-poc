import { css } from "@emotion/css";
import "./App.css";

function App() {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "3fr 7fr",
        height: "100vh",
        gap: "3rem",
      })}
    >
      <sidebar-react></sidebar-react>
      <radar-react></radar-react>
    </div>
  );
}

export default App;
