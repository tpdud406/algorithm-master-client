import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SubmitResult from "./pages/SubmitResult";
import Problems from "./pages/Problems";
import SolvingProblem from "./pages/SolvingProblem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users/:user_id",
    element: <SubmitResult />,
  },
  {
    path: "/users/:user_id/problems",
    element: <Problems />,
  },
  {
    path: "/users/:user_id/problems/:problem_id",
    element: <SolvingProblem />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
