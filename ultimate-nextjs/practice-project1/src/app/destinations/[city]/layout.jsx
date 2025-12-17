import React from "react";

const citylayout = ({ children, info }) => {
  return (
    <div className="flex">
      {children}
      {info}
    </div>
  );
};

export default citylayout;
