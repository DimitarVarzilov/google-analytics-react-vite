import { useEffect, useState } from "react";
import GA4 from "react-ga4";
import { Profiler } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    GA4._gaCommandSendPageviewParameters(
      window.location.pathname + window.location.search
    );
  }, []);
  function onRender(
    id: string,
    phase: "mount" | "update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: Set<any>
  ): void {
    // Aggregate or log render timings...
    console.log("id -->", id);
    console.log("phase", phase);
    console.log("actualDuration", actualDuration);
    console.log("baseDuration", baseDuration);
    console.log("startTime", startTime);
    console.log("commitTime", commitTime);
    console.log("interactions", interactions);
  }

  return (
    <div>
      <img className="logo" src="/vite.svg" alt="Vite icon" />
      <img className="logo" src="/react.svg" alt="React icon" />
      <Profiler id="h1 title in Home component" onRender={onRender}>
        <h1>Vite + React</h1>
      </Profiler>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            GA4.event({
              category: "Button",
              action: "Click",
              label: "Click Me",
              value: count,
            });
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default Home;
