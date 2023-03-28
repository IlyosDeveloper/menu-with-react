import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllMenu from "./pages/allMenu/AllMenu";
import Breakfast from "./pages/breakfast/Breakfast";
import Lunch from "./pages/lunch/Lunch";
import Shakes from "./pages/shakes/Shakes";
import Error from "./pages/pageNotFount/Error";

import NavButtons from "./components/NavButtons";

function App() {
  return (
    <div className='menu section'>
      <Router>
        <NavButtons />
        <Routes>
          <Route path='/' element={<AllMenu />} />
          <Route path='/breakfast' element={<Breakfast />} />
          <Route path='/lunch' element={<Lunch />} />
          <Route path='/shakes' element={<Shakes />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
