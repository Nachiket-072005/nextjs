// src/app/static/users/page.jsx

// This is a SERVER component and will be STATIC by default (SSG)
export default async function StaticUsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div>
      <h1>Static Users (SSG)</h1>
      {users.map((u) => (
        <div key={u.id}>
          <h3>{u.name}</h3>
          <p>{u.email}</p>
        </div>
      ))}
    </div>
  );
}
