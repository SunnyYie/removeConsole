import { useState } from "preact/hooks";
import viteLogo from "/vite.svg";
import preactLogo from "./assets/preact.svg";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);
  console.log(
    "%cConsole Log Test===>>>: ",
    "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
    "Console Log Test"
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
