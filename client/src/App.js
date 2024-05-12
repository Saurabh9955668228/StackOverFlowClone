import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import './App.css';
import Navbar from './components/Navbar';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <AllRoutes />        
      </Router >
    </div>
  );
}

export default App;
