import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Register from "./pages/Register";
import { activateGA4, deactivateGA4 } from "./utils";
import CookieConsent from "react-cookie-consent";

export default function App() {
  return (
    <>
      <button onClick={() => activateGA4()}>Enable GA4</button>
      <button onClick={() => deactivateGA4()}>Deactivate GA4</button>
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
        <CookieConsent
          enableDeclineButton
          flipButtons
          onAccept={activateGA4}
          onDecline={deactivateGA4}
          hideOnDecline
        >
          This website uses cookies
        </CookieConsent>
      </BrowserRouter>
    </>
  );
}
