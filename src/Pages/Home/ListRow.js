import React from 'react';
import { toast } from 'react-toastify';

const ListRow = ({ refetch, li, index, _id }) => {
  const { name, description } = li;
  const deleteTask = id => {
    fetch(`http://localhost:5000/addList/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Successfully deleted!!');
          refetch();
        } else {
          toast.error('Failed to delete task');
        }
      })
  }
  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{description}</td>
        <button
          onClick={() => deleteTask(_id)}
          class="btn btn-active btn-ghost">Delete</button>
      </tr>
    </div>
  );
};

export default ListRow;