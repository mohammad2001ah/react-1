import { useState } from "react";
var indexId = 4;

export default function Moh() {
  const initialUser = [
    { id: 1, username: "Mhamad", isEditing: false },
    { id: 2, username: "Hala", isEditing: false },
    { id: 3, username: "Ayman", isEditing: false },
  ];

  const [users, setUsers] = useState(initialUser);
  const [newUsername, setNewUsername] = useState("");

  function addNewUser() {
    if (newUsername.trim() === "") {
      alert("Please enter a username for the new user");
      return;
    }
    setUsers([...users, { id: indexId, username: newUsername, isEditing: false }]);
    indexId++; 
    setNewUsername("");
  }

  function editUser(id) {
    setUsers(users.map((user) =>
      user.id === id ? { ...user, isEditing: true } : user
    ));
  }

  function StopEditUser(id) {
    setUsers(users.map((user) =>
      user.id === id ? { ...user, isEditing: false } : user
    ));
  }

  function DeleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <>
      <div className="add-user-box">
        <input 
          placeholder="Enter username" 
          value={newUsername} 
          onChange={(e) => setNewUsername(e.target.value)} 
        />
        <button onClick={addNewUser}>Add New User</button>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.isEditing ? (
              <>
                <input
                  value={user.username}
                  onChange={(e) =>
                    setUsers(users.map((u) =>
                      u.id === user.id ? { ...u, username: e.target.value } : u
                    ))
                  }
                />
                <button onClick={() => StopEditUser(user.id)}>Stop Editing</button>
                <button onClick={() => DeleteUser(user.id)}>Delete</button>
              </>
            ) : (
              <>
                <span>{user.username}</span>
                <button onClick={() => editUser(user.id)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <p>Total Users: {users.length}</p>
    </>
  );
}
