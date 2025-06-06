import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Dashboard from "../components/Dashboard/Dashboard";
import PrivateRoute from "../layouts/PrivateRoute";
import AddMarathon from "../components/Dashboard/AddMarathon/AddMarathon";

export const routes = createBrowserRouter([
  {path: '/', Component: Root, children: [
    {index: true, Component: Home},
    {path: '/login', Component: Login},
    {path: '/register', Component: Register},
    {
      path: '/dashboard', 
      element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>,
      children: [
        {index: true, Component: AddMarathon},
      ]
    }
  ]}
])