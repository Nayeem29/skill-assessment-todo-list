import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text"
                placeholder="Name" className="input input-bordered w-full max-w-xs"
                {...register("name",
                  {
                    required: {
                      value: true,
                      message: 'This field is required'
                    },
                  }, {
                  maxLength: {
                    value: 20,
                    message: 'Max 20 characters'
                  }
                })}
              />
              <label className="label">
                {errors.name?.type === 'required' &&
                  <span className="label-text-alt">{errors.name.message}</span>}
                {errors.name?.type === 'maxLeangth' &&
                  <span className="label-text-alt">{errors.name.message}</span>}
              </label>
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
                  <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' &&
                  <span className='label-text-alt text-red-500'>{errors.email.message}</span>}

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
                  },
                  {
                    pattern: {
                      value: /^[A-Za-z]\w{7,14}$/,
                      message: 'please include special characters'
                    }
                  }
                )}
                placeholder="Password"
                className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {/* {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>} */}
              </label>
              <p className='mb-3 font-semibold'>Already have an account?
                <small className='text-secondary font-semibold'><Link to='/login'> Login</Link></small></p>
              <input
                disabled={errors.password || errors.email || errors.name} type="submit" value="Submit" className="btn" />
            </div>
          </form>
        </div>
      </div>



    </div>
  );
};

export default Register;