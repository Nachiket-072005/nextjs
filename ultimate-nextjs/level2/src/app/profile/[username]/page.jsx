import React from "react";

const page = async ({ params }) => {
  const { username } = await params;
  // const params = await props.params;
  // const username = await params.username;
  // console.log("Username:", username);
  return <div>Profile Name - {username}</div>;
};

export default page;
