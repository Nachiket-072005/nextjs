import React from "react";

export const revalidate = 10; // Revalidate data every 10 seconds

const User = () => {
  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleString()}</p>
    </div>
  );
};

export default User;
