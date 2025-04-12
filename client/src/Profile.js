
import React, { useContext } from 'react';
import UserContext from './UserContext';

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>hi {user.name}</h2>
    </div>
  );
}

export default Profile;
