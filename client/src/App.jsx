import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PreSignUp from "./pages/PreSignUp";
import CondidateSignUp from "./pages/CondidateSignUp";
import RecruiterSignup from "./pages/RecruiterSignup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign-in" element={<Login />} />
          <Route path="/pre-sign-up" element={<PreSignUp />} />
          <Route path="/condidate-signup" element={<CondidateSignUp />} />
          <Route path="/recruiter-signup" element={<RecruiterSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
