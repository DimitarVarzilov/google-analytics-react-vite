import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import reactGa from "react-ga";
import { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";

const trackingId: string = "G-E2S3XJ28TJ"; // Replace with your Google Analytics tracking ID
reactGa.initialize(trackingId);

export default function App() {
  useEffect(() => {
    reactGa.pageview(window.location.pathname);
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
