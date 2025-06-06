import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import registerLottie from '../../assets/registerLottie.json';
import Lottie from 'lottie-react';

const Register = () => {
  const { googleSignIn, registerWithEmail } = use(AuthContext);
  const navigate = useNavigate();

  const handleGoogleRegister = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          title: 'Successfully Logged In!',
        })
        navigate('/');
      }).catch((error) => {
        Swal.fire({
          title: 'Register Failed!',
          text: error.message,
          icon: 'error',
        });
      })
  }

  const handleEmailRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const [name, email, password, photoURL] = [form.name.value, form.email.value, form.password.value, form.photoURL.value];
    registerWithEmail(name, photoURL, email, password)
      .then(() => {
        Swal.fire({
          title: 'Successfully Registered!',
        })
        navigate('/');
      }).catch((error) => {
        Swal.fire({
          title: 'Register Failed!',
          text: error.message,
          icon: 'error',
        });
      })
  }

  return (
    <div className='flex justify-center items-center w-full mx-auto'>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center">
          <div className="text-center lg:text-left">
            <Lottie animationData={registerLottie} style={{
              width: '200px'
            }}></Lottie>
          </div>
          <div className="card bg-base-300 w-[18rem] border border-gray-400 shadow-2xl">
            <div className="card-body">
              <h1 className='text-3xl'>Register Now!</h1>
              <form onSubmit={handleEmailRegister}>
                <fieldset className="fieldset">
                  <label className='label'>Name</label>
                  <input type="text" className="input" placeholder="Name" name='name' />
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" name='email' />
                  <label className="label">Password</label>
                  <input type="password" className="input" placeholder="Password" name='password' />
                  <label className="label">Photo URL</label>
                  <input type="text" className="input" placeholder="Photo URL" name='photoURL' />
                  <div><Link to={'/login'} className="link link-hover text-blue-900">Already Have an Account?</Link></div>
                  <button className="btn btn-primary font-extralight mt-4" type='submit'>Register</button>
                  <button className="btn bg-white text-black border-[#e5e5e5] mt-2 font-extralight" type='button' onClick={handleGoogleRegister}>
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Register with Google
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;