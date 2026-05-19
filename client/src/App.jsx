import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PreSignUp from "./pages/PreSignUp";
import CandidateSignUp from "./pages/CandidateSignUp";
import RecruiterSignup from "./pages/RecruiterSignup";
// import { SkeletonBadgeCard } from "./components/SkeltonBadgeCard";
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
      element: <CandidateSignUp />,
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
