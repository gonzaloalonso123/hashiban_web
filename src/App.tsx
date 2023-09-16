import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cancel from "./components/buy_tab/Cancel";
import Success from "./components/buy_tab/Success";
import Guide from "./components/guide/Guide";
import Home from "./Home";
import { Auction } from "./components/Auction/Auction";
import { AuthContextProvider } from "./Auth/AuthContext";
import Header from "./components/header/header";
import { useState } from "react";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instrucciones" element={<Guide />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/subasta" element={<Auction />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
