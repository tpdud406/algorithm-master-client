import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./shared/GlobalStyle";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SubmitedResult from "./pages/SubmitedResult";
import Problems from "./pages/Problems";
import SolvingProblem from "./pages/SolvingProblem";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";
import CreateProblem from "./components/CreateProblem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      {
        path: "/users/:user_id",
        element: (
          <ProtectedRoute>
            <SubmitedResult />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users/:user_id/problems",
        element: (
          <ProtectedRoute>
            <Problems />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users/:user_id/problems/new",
        element: <CreateProblem />,
      },
      {
        path: "/users/:user_id/problems/:problem_id",
        element: <SolvingProblem />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
