"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const User = () => {
  //   const [userInfo, setUserInfo] = useState(null);
  //   console.log(userInfo);
  //   const params = useParams();

  //   useEffect(() => {
  //     const id = params.id;
  //     async function getUserById(id) {
  //       const data = await fetch(`https://dummyjson.com/users/${id}`);
  //       setUserInfo(await data.json());
  //     }
  //     getUserById(id);
  //   }, [params.id]);
  const params = useParams();
  const id = params.id;
  const { data, error } = useSWR(`https://dummyjson.com/users/${id}`, fetcher);

  //   console.log(data);

  return (
    <div>
      <h1>
        {data?.firstName} {data?.lastName}
      </h1>
      <p>Email: {data?.email}</p>
    </div>
  );
};

export default User;
