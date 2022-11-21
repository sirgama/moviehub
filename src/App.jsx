import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <AuthContextProvider>
      
      <BrowserRouter>
     
     <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute> } />
        <Route path='/movie/:movie_id' element={<ProtectedRoute><MovieDetail /></ProtectedRoute>} />
        <Route path='/tv/show/:tv_id' element={<ProtectedRoute><TvDetail /></ProtectedRoute>} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
