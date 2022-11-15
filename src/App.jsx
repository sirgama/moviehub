import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
