import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
