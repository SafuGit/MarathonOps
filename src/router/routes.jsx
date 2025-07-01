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
import NoApplications from "../components/NoApplications/NoApplications";
import ContactUs from "../components/ContactUs/ContactUs";

export const routes = createBrowserRouter([
  {path: '/', Component: Root, children: [
    {
      index: true, 
      Component: Home,
      loader: () => fetch('https://marathon-ops-server.vercel.app/marathons/limit/6'),
      hydrateFallbackElement: <Loading></Loading>
    },
    {path: '/login', Component: Login},
    {path: '/register', Component: Register},
    {
      path: '/marathons', 
      element: <PrivateRoute>
        <Marathons></Marathons>
      </PrivateRoute>,
      loader: () => fetch('https://marathon-ops-server.vercel.app/marathons'),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/marathon/:id',
      element: <MarathonDetail></MarathonDetail>,
      loader: ({params}) => fetch(`https://marathon-ops-server.vercel.app/marathons/${params.id}`),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/marathonRegister/:id',
      element: <PrivateRoute>
        <MarathonRegister></MarathonRegister>
      </PrivateRoute>,
      loader: ({params}) => fetch(`https://marathon-ops-server.vercel.app/marathons/${params.id}`),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/contactUs',
      Component: ContactUs,
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
          loader: ({params}) => fetch(`https://marathon-ops-server.vercel.app/marathons/user/${params.email}`, {
            credentials: 'include'
          }),
          hydrateFallbackElement: <Loading></Loading>,
          errorElement: <div className="w-full text-center"><h1 className="text-5xl">NO MARATHONS FOUND</h1></div>
        },
        {
          path: '/dashboard/myApplications/:email',
          Component: MyApplications,
          loader: ({params}) => fetch(`https://marathon-ops-server.vercel.app/applications/${params.email}`, {
            credentials: 'include',
          }),
          hydrateFallbackElement: <Loading></Loading>,
          errorElement: <NoApplications></NoApplications>
        },
      ]
    },
    {
      path: '*',
      Component: NotFound,
    }
  ],}
])