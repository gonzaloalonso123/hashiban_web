import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cancel from "./components/buy_tab/Cancel";
import Success from "./components/buy_tab/Success";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
