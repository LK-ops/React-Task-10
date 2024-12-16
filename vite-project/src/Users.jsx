import React from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
  ];

  const handleUserClick = (id) => {
    navigate(`/user/${id}`);
  };
 const goToHome = (id) => {
    navigate(`/`);
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => handleUserClick(user.id)}>{user.name}</button>
          </li>
        ))}
      </ul>
      <button onClick={goToHome}>Go back to home</button>
    </div>
  );
};

export default Users;
