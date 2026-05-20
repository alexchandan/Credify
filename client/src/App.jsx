import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PreSignUp from "./pages/PreSignUp";
import CandidateSignup from "./pages/CandidateSignup";
import RecruiterSignup from "./pages/RecruiterSignup";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-in",
      element: <Login />,
    },
    {
      path: "/pre-sign-up",
      element: <PreSignUp />,
    },
    {
      path: "/candidate-signup",
      element: <CandidateSignup />,
    },
    {
      path: "/recruiter-signup",
      element: <RecruiterSignup />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
