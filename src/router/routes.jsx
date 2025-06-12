import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Dashboard from "../components/Dashboard/Dashboard";
import PrivateRoute from "../layouts/PrivateRoute";
import AddMarathon from "../components/Dashboard/AddMarathon/AddMarathon";
import Marathons from "../components/Marathons/Marathons";
import Loading from "../components/Loading/Loading";
import MarathonDetail from "../components/MarathonDetails/MarathonDetail";

export const routes = createBrowserRouter([
  {path: '/', Component: Root, children: [
    {index: true, Component: Home},
    {path: '/login', Component: Login},
    {path: '/register', Component: Register},
    {
      path: '/marathons', 
      Component: Marathons,
      loader: () => fetch('http://localhost:3000/marathons'),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/marathon/:id',
      Component: MarathonDetail,
      loader: ({params}) => fetch(`http://localhost:3000/marathons/${params.id}`),
      hydrateFallbackElement: <Loading></Loading>
    },
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