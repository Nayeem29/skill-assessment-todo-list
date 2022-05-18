import React from 'react';
import { useForm } from 'react-hook-form';

const FormInput = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}
        className='flex justify-center items-center'
      >

        <div className="form-control mx-5">
          <label className="input-group input-group-md">
            <span>Task Name</span>
            <input type="text"
              {...register("name", { required: true })}
              placeholder="Type here" className="input input-bordered focus:outline-none input-md" />
          </label>
          <label className="label">
            {errors.name && <span className="label-text-alt text-red-600">Required</span>}
          </label>
        </div>

        <div>
          <textarea {...register("description", { required: true })}
            className="textarea textarea-bordered focus:outline-none h-24" placeholder="Description"></textarea>
          <label className="label">
            {errors.description && <span className="label-text-alt text-red-600">Required</span>}
          </label>
        </div>

        <input type="submit" value='ADD' className='btn mx-5' />
      </form>
    </div>
  );
};

export default FormInput;