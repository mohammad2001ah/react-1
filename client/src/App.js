import React from 'react';
import UserProvider from './UserProvider';
import Profile from './Profile';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>my application</h1>
        <Profile />
      </div>
    </UserProvider>
  );
}

export default App;