import { useEffect, useState } from "react";
import GA4 from "react-ga4";

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    GA4._gaCommandSendPageviewParameters(
      window.location.pathname + window.location.search
    );
  }, []);

  return (
    <div>
      <img className="logo" src="/vite.svg" alt="Vite icon" />
      <img className="logo" src="/react.svg" alt="React icon" />
      <h1>Vite + React</h1>
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
