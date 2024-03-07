import { Link } from "react";
import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link className="site-logo" to="/">
            #LOGO
          </Link>
          <nav>ß
            <Link to="/about">О компании</Link>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
