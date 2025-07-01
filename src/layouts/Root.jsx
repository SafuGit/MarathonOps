import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

const Root = () => {
  const location = useLocation();
  const navigation = useNavigation();

  useEffect(() => {
    const titles = {
    '/': 'Home - MarathonOps',
    '/login': 'Login - MarathonOps',
    '/register': 'Register - MarathonOps',
    '/marathons': 'Marathons - MarathonOps',
    '/dashboard': 'Dashboard - MarathonOps',
    '/contactUs': 'Contact Us - MarathonOps',
  }
    document.title = titles[location.pathname] || 'MarathonOps';
  }, [location])

  return (
    <div className='min-h-[100vh] flex flex-col'>
      <Navbar></Navbar>
      {navigation.state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Root;