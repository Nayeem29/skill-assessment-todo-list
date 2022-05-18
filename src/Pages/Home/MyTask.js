import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedComponets/Loading';
import ListRow from './ListRow';

const MyTask = () => {

  const { data: lists, isLoading, refetch } = useQuery('myList', () => fetch('http://localhost:5000/myList').then(res => res.json()))
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='flex items-center justify-center'>
      <div class="overflow-x-auto">
        <table class="table w-auto">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Task Name</th>
              <th>Description</th>

            </tr>
          </thead>
          <tbody>
            {
              lists.map((li, index) => <ListRow
                key={li._id}
                li={li}
                index={index}
                refetch={refetch}
              ></ListRow>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTask;