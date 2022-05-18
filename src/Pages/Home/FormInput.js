import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const FormInput = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    const task = {
      name: data.name,
      description: data.description
    };
    fetch('http://localhost:5000/addList', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          toast.success('New task is added!!');
        } else {
          toast.error('Fail to add new task');
        }
      })
  }
  return (
    <div className='border-2 border-gray-400 py-5 mx-24'>
      <form onSubmit={handleSubmit(onSubmit)}
        className='lg:flex justify-center items-center'
      >

        <div className="form-control ml-2 lg:mx-5">
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

        <div className='ml-2'>
          <textarea {...register("description", { required: true })}
            className="textarea textarea-bordered focus:outline-none h-24" placeholder="Description"></textarea>
          <label className="label">
            {errors.description && <span className="label-text-alt text-red-600">Required</span>}
          </label>
        </div>

        <input type="submit" value='ADD' className='btn ml-2 lg:mx-5' />
      </form>
    </div>
  );
};

export default FormInput;