import "./App.css";
import LandingPage from "./pages/landing-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/profile";
import AddRecipe from "./pages/add-recipe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/add-recipe",
      element: <AddRecipe />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
