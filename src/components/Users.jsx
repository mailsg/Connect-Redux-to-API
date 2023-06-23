// Import useSelector and destructure your users, isLoading and error from your users state
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/users/usersSlice';

// Add a loading state; JSX content that shows when isLoading is true
const Users = () => {
  const dispatch = useDispatch();

  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Add an error state; JSX content that shows when error is true
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}>
          <p>
            {user.name.first}
            {' '}
            {user.name.last}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Users;
