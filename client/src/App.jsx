import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PreSignUp from "./pages/PreSignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign-in" element={<Login />} />
          <Route path="/pre-sign-up" element={<PreSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
