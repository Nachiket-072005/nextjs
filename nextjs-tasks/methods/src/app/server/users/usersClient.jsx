// app/server/users/UsersClient.jsx
"use client";

export default function UsersClient({ users }) {

  return (
    <div>
      <h1>Users (Client Side UI)</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
