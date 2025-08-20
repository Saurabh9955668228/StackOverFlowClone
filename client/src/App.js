import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import AllRoutes from './AllRoutes';
import TagsList from './Pages/Tags/tagsList.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/tags' element={<TagsList />} />
          {/* This will catch any routes defined in AllRoutes.js */}
          <Route path="/*" element={<AllRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;