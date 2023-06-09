import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";
import Register from "./pages/Register";

const trackingId: string = "G-7W12S7H1TR"; // Replace with your Google Analytics MEASUREMENT ID
ReactGA.initialize(trackingId);

export default function App() {
  useEffect(() => {
    ReactGA._gaCommandSendPageviewParameters(
      window.location.pathname + window.location.search
    );
  }, []);

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
