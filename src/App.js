import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from "./pages/Kids";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/kids" element={<Kids/>}/>
      </Routes>
      
    </div>

    </>
  );
      
}

export default App;
