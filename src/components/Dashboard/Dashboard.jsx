import React, { use } from 'react';
import { Link, Outlet, useNavigation } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../Loading/Loading';

const Dashboard = () => {
  const {user} = use(AuthContext);
  const navigation = useNavigation();

  return (
    <div className="drawer md:drawer-open mt-2 mb-20">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content p-4">
        <label htmlFor="my-drawer-2" className="btn flex items-center justify-center bg-yellow-600 rounded-full mx-auto mb-4 drawer-button md:hidden w-[90vw]">Open drawer</label>
        {navigation.state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
      </div>

      <div className="drawer-side z-80">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4 rounded-3xl text-lg ml-4">
          <li><Link to={''}>Add Marathon</Link></li>
          <li><Link to={`myMarathons/${user.email}`}>My Marathons</Link></li>
          <li><Link to={`myApplications/${user.email}`}>My Apply List</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
