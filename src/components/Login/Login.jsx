import React from 'react';
import loginLottie from '../../assets/loginLottie.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className='flex justify-center items-center w-full mx-auto'>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center">
          <div className="text-center lg:text-left">
            <Lottie animationData={loginLottie} style={{
              width: '200px'
            }}></Lottie>
          </div>
          <div className="card bg-base-300 w-[18rem] border border-gray-400 shadow-2xl">
            <div className="card-body">
              <h1 className='text-3xl'>Login Now!</h1>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><Link to={'/register'} className="link link-hover text-blue-900">Dont Have an Account?</Link></div>
                <button className="btn btn-primary font-extralight mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;