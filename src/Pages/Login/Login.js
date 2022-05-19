import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedComponets/Loading';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  let errorMsg;
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const onSubmit = data => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    reset();
  }
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from])

  if (loading) {
    return <Loading />
  }
  if (error) {
    errorMsg = <p className='text-red-600'><small>{error?.message}</small></p>
  }
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center">Sign in</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text"
                {...register("email",
                  {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  }, {
                  pattern:
                  {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a Valid email'
                  }
                }
                )}
                placeholder="Email"
                className="input input-bordered w-full max-w-xs" />

              <label className="label">
                {errors.email?.type === 'required' &&
                  <span className='label-text-alt  text-red-600'>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' &&
                  <span className='label-text-alt  text-red-600'>{errors.email.message}</span>}

              </label>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password"
                {...register("password",
                  {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  }
                )}
                placeholder="Password"
                className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
              </label>
              <p className='mb-3 font-semibold'>Create New Account
                <small className='text-secondary font-semibold'><Link to='/signup'> Sign up</Link></small></p>
              <small className='mb-2'>
                {
                  error && errorMsg
                }
              </small>
              <input
                disabled={errors.password || errors.email || errors.name} type="submit" value="Submit" className="btn" />
            </div>
          </form>
        </div>
      </div>



    </div>
  );
};

export default Login;