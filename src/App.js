import './App.css';
import 'flowbite';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Components/Navbar'
import Location from './Components/Location';
import Contact from './Components/Contact'
import Rdv from './Components/Rdv'
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/location" Component={Location} />
          <Route path="/contact" Component={Contact} />
          <Route path="/rdv" Component={Rdv} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
