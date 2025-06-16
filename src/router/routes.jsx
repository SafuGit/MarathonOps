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
import MarathonRegister from "../components/MarathonRegister/MarathonRegister";
import MyMarathons from "../components/Dashboard/MyMarathons/MyMarathons";
import NotFound from "../components/NotFound/NotFound";
import MyApplications from "../components/Dashboard/MyApplications/MyApplications";

export const routes = createBrowserRouter([
  {path: '/', Component: Root, children: [
    {
      index: true, 
      Component: Home,
      loader: () => fetch('http://localhost:3000/marathons/limit/6'),
      hydrateFallbackElement: <Loading></Loading>
    },
    {path: '/login', Component: Login},
    {path: '/register', Component: Register},
    {
      path: '/marathons', 
      element: <PrivateRoute>
        <Marathons></Marathons>
      </PrivateRoute>,
      loader: () => fetch('http://localhost:3000/marathons'),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/marathon/:id',
      element: <MarathonDetail></MarathonDetail>,
      loader: ({params}) => fetch(`http://localhost:3000/marathons/${params.id}`),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/marathonRegister/:id',
      element: <PrivateRoute>
        <MarathonRegister></MarathonRegister>
      </PrivateRoute>,
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
        {
          path: '/dashboard/myMarathons/:email',
          Component: MyMarathons,
          loader: ({params}) => fetch(`http://localhost:3000/marathons/user/${params.email}`, {
            credentials: 'include'
          }),
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: '/dashboard/myApplications/:email',
          Component: MyApplications,
          loader: ({params}) => fetch(`http://localhost:3000/applications/${params.email}`, {
            credentials: 'include',
          }),
          hydrateFallbackElement: <Loading></Loading>
        }
      ]
    },
    {
      path: '*',
      Component: NotFound,
    }
  ],}
])