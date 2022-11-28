import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Problems from "./pages/Problems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users/:user_id/problems",
    element: <Problems />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
