import React from 'react';
import { toast } from 'react-toastify';

const ListRow = ({ refetch, li, index, }) => {
  const { name, description, _id } = li;
  const deleteTask = id => {
    fetch(`https://serene-beyond-66571.herokuapp.com/myList/${id}`, {
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

    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <button
          onClick={() => deleteTask(_id)}
          class="btn btn-active btn-ghost">Delete</button>
      </td>
    </tr>

  );
};

export default ListRow;