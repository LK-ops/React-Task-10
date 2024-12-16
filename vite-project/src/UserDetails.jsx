import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const userId = parseInt(id, 10);

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
  ];

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserDetails;