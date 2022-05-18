import React from 'react';
import FormInput from './FormInput';
import MyTask from './MyTask';

const ToDo = () => {
  return (
    <div>
      <h1 className='text-2xl text-center font-bold my-5'>My Next Task</h1>
      <FormInput />
      <MyTask />
    </div>
  );
};

export default ToDo;