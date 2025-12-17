// app/server/users/page.jsx

import UsersClient from "./usersClient.jsx";

export default async function UsersPage() {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "no-store", // SSR
  });
  const data = await res.json();

  // just pass plain data to the client component
  return <UsersClient users={data.users} />;
}
