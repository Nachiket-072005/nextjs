import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div>About Page</div>
      <Image
        src={"/shivaji_maharaj.jpg"}
        width={300}
        height={300}
        alt="About Image"
      />
    </>
  );
};

export default page;
