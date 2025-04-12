import UserContext from './UserContext';

function UserProvider({ children }) {
  const user = { name: 'Mohammad' };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;