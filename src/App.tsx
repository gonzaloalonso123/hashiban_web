import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Guide from './components/guide/Guide';


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/cart" element = {<Guide/>} />
    </Routes>
   </Router>
   </>
  );
}

export default App;