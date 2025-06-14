import React, { use } from 'react';
import { Link, Outlet, useNavigation } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../Loading/Loading';

const Dashboard = () => {
  const {user} = use(AuthContext);
  const navigation = useNavigation();

  return (
    <div className="drawer drawer-open mt-2 mb-20">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content p-4">
        {navigation.state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4 rounded-3xl text-lg ml-4">
          <li><Link to={''}>Add Marathon</Link></li>
          <li><Link to={`myMarathons/${user.email}`}>My Marathons</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
