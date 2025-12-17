"use client";

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Users = () => {
  //   const [users, setUsers] = useState([]);
  //   console.log(users);
  //   useEffect(() => {
  //     async function fetchUsers() {
  //       const data = await fetch("https://dummyjson.com/users");
  //       setUsers(await data.json());
  //     }
  //     fetchUsers();
  //   }, []);

  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  console.log(data);

  if (error) {
    return <h1>Error happened!</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Users</h1>
      {data.users &&
        data.users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div>{user.firstName}</div>
          </Link>
        ))}
    </>
  );
};

export default Users;
