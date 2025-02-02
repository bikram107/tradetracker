import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import { StockProvider } from "./StockContext.jsx";
import Analysis from "./pages/Home/Analysis/Analysis.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Help from "./pages/Help/Help.jsx";

function App() {
  return (
    <StockProvider>
      <Router basename="/tradetracker">
        <div className="whole">
          <div className="app">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    </StockProvider>
  );
}

export default App;
