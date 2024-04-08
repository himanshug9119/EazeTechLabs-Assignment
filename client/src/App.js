import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Home from './components/Home'
import Library from './components/Library';
import Transformation from './components/Transformation';
import Analytics from './components/Analytics';
import Activities from './components/Activities';
import Navbar from './components/Navbar';
function App() {

  return (
    <Router>
      <div
        className="flex flex-row h-222 gap-2 w-full "
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div>
          <Sidebar />
        </div>
        <div className=" flex flex-col gap-3 w-full ml-4 h-208 mr-3">
          <div className='mt-2'>
            <Navbar />
          </div>
          <div className="mt-2 ">
            {/* Routes */}
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/transformation" element={<Transformation />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/library" element={<Library />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
