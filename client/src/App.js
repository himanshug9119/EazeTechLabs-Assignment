import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Home from './components/Home'
import Library from './components/Library';
import Transformation from './components/Transformation';
import Analytics from './components/Analytics';
import Activities from './components/Activities';
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/transformation" element={<Transformation />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
