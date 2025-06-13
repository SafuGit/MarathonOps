import React from 'react';
import { Link, Outlet } from 'react-router';

const Dashboard = () => {
  return (
    <div className="drawer drawer-open mt-2 mb-20">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content p-4">
        <Outlet />
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4 rounded-3xl text-lg ml-4">
          <li><Link to={''}>Add Marathon</Link></li>
          <li><Link to={'myMarathons'}>My Marathons</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
