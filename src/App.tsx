import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cancel from "./components/BuyTab/Cancel";
import Success from "./components/BuyTab/Success";
import Home from "./Home";

import { AuthContextProvider } from "./Auth/AuthContext";
import "./content/i18n";
import HashibanInstructions from "./components/Guide/Guide";
import { ScrollProvider } from "./providers/ScrollProvider";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/guide" element={<HashibanInstructions />} />
          <Route path="/instrucciones" element={<HashibanInstructions />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
